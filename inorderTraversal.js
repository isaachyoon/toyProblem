let binaryTree = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

binaryTree.prototype.insert = function(val) {
	if(val < this.val) {
		if(this.left === null) {
			this.left = new binaryTree(val)
		} else {
			this.left.insert(val)
		}
	} else {
		if(this.right === null){
			this.right = new binaryTree(val)
		} else {
			this.right.insert(val);
		}
	}
}

var tree = new binaryTree(3);
tree.insert(5);
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(7);


var inorderTraversal = function(tree){
	// if(tree === null) {
	// 	return -1;
	// }

	if(tree){
		inorderTraversal(tree.left)
		console.log(tree.val)
		inorderTraversal(tree.right)
	}

}

console.log(inorderTraversal(tree))