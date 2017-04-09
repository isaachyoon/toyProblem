

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


let heightOfBinaryTree = function(tree) {
	if(tree === null) {
		return -1;
	}

	var leftH = heightOfBinaryTree(tree.left)
	var rightH = heightOfBinaryTree(tree.right)

	if(leftH > rightH) {
		return leftH + 1;
	} else {
		return rightH + 1;
	}
}











// let heightOfBinaryTree = function(tree) {
// 	if(tree === null) {
// 		return -1;
// 	}
// 	let lefth = heightOfBinaryTree(tree.left);
// 	let righth = heightOfBinaryTree(tree.right);

// 	if(lefth > righth) {
// 		return lefth + 1;
// 	} else {
// 		return righth + 1;
// 	}
// }

console.log(heightOfBinaryTree(tree))