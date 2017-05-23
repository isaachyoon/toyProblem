

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

//18: XVIII
//74: LXXIV
//44: XLIV


function romanNumeralToIntegers(Roman) {
	var storage = [];
	for(var i = 0; i < Roman.length; i ++) {
		storage.push(DIGIT_VALUES[Roman[i]])
	}
	for(var i = 0; i < storage.length - 1 ; i++){
		if(storage[i+1] > storage[i]) {
			storage[i] = storage[i] * -1;
		}
	}
	return storage.reduce((x,y) => (x+y))


}

console.log(romanNumeralToIntegers('LXXXVII'))