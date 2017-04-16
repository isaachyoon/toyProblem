

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


var tree = new binarySearchTree(4);
tree.insert(2)
tree.insert(6)
tree.insert(1)
tree.insert(3)
tree.insert(4)
tree.insert(6)

var binaryTreeInorderTraversal = function(tree) {
	var result = [];
  var temp = [];
  while(tree || temp.length) {
      while(tree){
          temp.push(tree);
          tree = tree.left
      }
      tree = temp.pop();
      result.push(tree.value);
      tree = tree.right
  }
  return result;
}

var binaryTreeInorderTraversal = function(tree) {
	var result = [];
	function print(tree){
		if(!tree) {
			return;
		}
		print(tree.left);
		result.push(tree.value);
		print(tree.right);
	}
	print(tree)
	return result;
}

var result = binaryTreeInorderTraversal(tree);
// console.log(result)

// var isValidBST = function(root) {

//     function valid(root, val){
//  			valid(root.left, val)
//  			valid(root.right, val)

//     }

//     valid(root, root.value)
//     return true;

// };

// console.log(isValidBST(tree))

var symmetricTree = function(tree){
	console.log(tree)
	if(tree.val === undefined){
		return false;
	}

	function symmetric(node1, node2){
		if((node1.value === null && node2.value !== null) || (node1.value !== null && node2.value === null)){
			return false;
		}
		console.log('node1 Val: ' + node1.value + ' node2 Val: ' + node2.value)
		if(node1.value === node2.value) {
			symmetric(node1.left, node2.right)
			symmetric(node1.right, node2.left)
		} else {
			return false
		}
		return true
	}
	symmetric(tree.left, tree.right);
}


console.log(symmetricTree(tree))