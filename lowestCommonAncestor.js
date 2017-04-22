var binaryTree = function(val){
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
		if(this.right === null) {
			this.right = new binaryTree(val);
		} else {
			this.right.insert(val)
		}
	}
}

var tree = new binaryTree(4);
tree.insert(2)
tree.insert(6)
tree.insert(1)
tree.insert(3)
tree.insert(5)
tree.insert(7)



function lowestCommonAncestor(root, p, q) {

	if(root === null){
		return null;
	}
	if(root === p || root === q ) {
		return root
	}
	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);

	if(left !== null && right !== null) {
		return root;
	}
	if(left === null && right === null) {
		return root;
	}
	return left !== null ? left : right;

}

var res = lowestCommonAncestor(tree, 1, 3)
console.log(res)