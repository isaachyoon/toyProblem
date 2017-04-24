var treePractice = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let tree = new treePractice('F');
let node1 = tree.left = new treePractice('D')
let node2 = tree.right = new treePractice('J')
let node3 = node1.left = new treePractice('B')
let node4 = node1.right = new treePractice('E')
let node5 = node2.left = new treePractice('G')
let node6 = node2.right = new treePractice('K')
let node7 = node3.left = new treePractice('A')
let node8 = node3.right = new treePractice('C')
let node9 = node5.right = new treePractice('I')



var depthFirstTree = function(tree) {
	var bool = false

	function findItem(tree, str) {
		if(!tree){
			return
		}
		if(tree.left) {
			findItem(tree.left, str)
		}
		if(tree.right){
			findItem(tree.right, str)
		}
		if(tree.val === str){
			console.log('entered')
			console.log(tree.val)
			bool = true;
			return
		}

	}
	findItem(tree, 'I')
	return bool;
}

var treeHeight = function(tree){
	if(!tree){
		return - 1;
	}
	let leftH = treeHeight(tree.left);
	let rightH = treeHeight(tree.right);

	return Math.max(leftH, rightH) + 1
}

// console.log(treeHeight(tree))

console.log(depthFirstTree(tree))