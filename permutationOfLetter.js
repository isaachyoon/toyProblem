//
function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
var res = [];

function permutationOfLetter(str, index, sNode) {
	res = res || [];
	if(index > str.length-1) {
		res.push(sNode.val)
		return;
	}
	//left
	var newVal = sNode.val + str[index]
	sNode.left = new node(newVal)
	permutationOfLetter(str, index+1, sNode.left)
	sNode.right = new node(sNode.val)
	//right
	permutationOfLetter(str, index+1, sNode.right)
	console.log(res)
}



var str = ['r','a','b', 'b','b','i','t']
var startNode = new node('')

permutationOfLetter(str, 0, startNode)

var count = 0;

for(var i = 0; i < res.length; i ++) {
	if(res[i] === 'rabbit') {
		count++;
	}
}
console.log(count)