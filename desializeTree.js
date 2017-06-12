function node(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var first = new node('A');
var second = first.left = new node('B');
var third = first.right = new node('C');
var fourth = second.left = new node('D');
var fifth = second.right = new node('E');
var sixth = third.left = new node('F');
var seventh = third.right = new node('G');


// console.log(first)

function deserialize(node) {
	var resArr = [];
	var deserial = '';
	resArr.push(node);
	while(resArr.length !== 0) {
		var len = resArr.length;
		for(var i = 0; i < len; i++) {
			deserial += resArr[0].val
			if(resArr[0].left) {
				resArr.push(resArr[0].left)
			} else if(!resArr[0].left){
				deserial += '*'
			}
			if(resArr[0].right) {
				resArr.push(resArr[0].right)
			} else if(!resArr[0].left) {
				deserial += '*'
			}
			resArr.shift();
  	}
  	console.log(resArr)
  }
  console.log(deserial)

}

deserialize(first)

                                                        45
