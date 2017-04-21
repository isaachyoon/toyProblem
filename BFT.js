var treePractice = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let tree = new treePractice(3);
let node1 = tree.left = new treePractice(2)
let node2 = tree.right = new treePractice(3)
let node3 = node1.left = new treePractice(4)
let node4 = node1.right = new treePractice(5)
let node5 = node2.left = new treePractice(6)
let node6 = node2.right = new treePractice(7)


// let node5 = node2.left = new treePractice(4)
// let node6 = node2.right = new treePractice(3)


var bft = function(tree) {
	var resultArr = [];
	var queue = [];
	if(!tree) return [];
	queue.push(tree)
	while (queue.length !== 0) {
		var levelArr = [];
		var qLength = queue.length;
		for(var i =0; i < qLength; i ++) {
			var tempNode = queue.splice(0,1)
			levelArr.push(tempNode[0].val)
			if (tempNode[0].left){
				queue.push(tempNode[0].left)
			}
			if (tempNode[0].right){
				queue.push(tempNode[0].right)
			}
		}
		resultArr.push(levelArr);
	}
	console.log(resultArr)
	return resultArr;
}

bft(tree)
