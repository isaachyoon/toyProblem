var threeStacks = function(array) {

}


// threeStaks([1,2,3,4,5,6,7,8,9])

class TripleStack {
  constructor() {
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  _getLength(stack) {
    return this._lengths[stack - 1];
  }

  push(stack, value) {
    let idx = this._getLength(stack) * 3 + stack - 1;
    this._array[idx] = value;
    ++this._lengths[stack - 1];
  }

  pop(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this._array[idx];
      this._array[idx] = undefined;
      --this._lengths[stack - 1];
    }
    return value;
  }

  peek(stack) {
    let length = this._getLength(stack),
      value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1;
      value = this._array[idx];
    }
    return value;
  }

  isEmpty(stack) {
    return this._getLength(stack) === 0;
  }
}

var yellow = new TripleStack;
yellow.push([],3)
console.log(yellow);