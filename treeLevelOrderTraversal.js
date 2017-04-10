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


function treeLevelOrderTraversal(tree) {
	var resultObj = {};

	function traverse(tree, level){
		if(tree === null){
			return -1;
		} else {
			if(resultObj[level] === undefined){
				var newArray = [];
				newArray.push(tree.val)
				resultObj[level] = newArray;
			} else {
				resultObj[level].push(tree.val)
			}
			traverse(tree.left, level + 1);
			traverse(tree.right, level + 1);
		}
	}

	traverse(tree, 1)
	let result = [];
	for(var key in resultObj){
		result = result.concat(resultObj[key])
	}
	return result.join();

}

console.log(treeLevelOrderTraversal(tree))