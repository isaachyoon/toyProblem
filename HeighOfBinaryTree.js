

var binarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;

}

binarySearchTree.prototype.insert = function(val) {
	if(val < this.value) {
		if(this.left === null) {
			this.left = new binarySearchTree(val)
		} else {
			this.left.insert(val);
		}
	} else if (val > this.value) {
		if(this.right === null) {
			this.right = new binarySearchTree(val)
		} else {
			this.right.insert(val)
		}
	}
}

binarySearchTree.prototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

var tree = new binarySearchTree(3);
tree.insert(2)
tree.insert(5)
tree.insert(1)
tree.insert(4)
tree.insert(6)
tree.insert(7)
tree.insert(10)




let heightOfBinaryTree = function(tree) {
	// console.log('yee', tree)
	if(tree === null){
		return -1;
	}

	let leftH = heightOfBinaryTree(tree.left)
	// console.log('L', leftH);
	let rightH = heightOfBinaryTree(tree.right)
	// console.log(rightH)
	// console.log(leftH + " " + rightH)

	return Math.max(leftH, rightH) + 1
}


let findMinHeight = function(tree){
	if(tree === null) {
		return -1;
	}
	let leftH = findMinHeight(tree.left);
	let rightH = findMinHeight(tree.right);

	return Math.min(leftH, rightH) + 1

}

let findMaxHeightR = function(tree) {
		if(tree === null) {
		return -1;
	}
	let leftH = findMaxHeightR(tree.left);
	let rightH = findMaxHeightR(tree.right);

	return Math.max(leftH, rightH) + 1
}


let main = function(tree){
	console.log(findMaxHeightR(tree));
	console.log(findMinHeight(tree));
	return findMaxHeightR(tree) === findMinHeight(tree) + 1 ? true : false
}

console.log(main(tree))
// console.log(findHeight(tree))
// console.log(leftHeight)
// console.log(rightHeight)

















