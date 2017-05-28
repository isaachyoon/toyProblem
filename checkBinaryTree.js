function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var node1 = new tree(50)
var node2 = node1.left = new tree(30)
var node3 = node1.right = new tree(80)
var node4 = node2.left = new tree(20)
var node5 = node2.right = new tree(60)
var node6 = node3.left = new tree(70)
var node7 = node3.right = new tree(50)
// var node8 = node4.left = new tree('h')
// var node9 = node4.right = new tree('i')
// var node10 = node5.left = new tree(2)
// var node11 = node5.right= new tree(5)
// var node12 = node6.left = new tree('L')
// var node13 = node6.right = new tree('M')
// var node14 = node7.left = new tree(12)
// var node15 = node7.right = new tree(15)
// node11.left = new tree(4)
// node11.right = new tree(6)


function checkBinaryTree(node, result){
	result = result || true;
	if(!node) {
		return;
	}

	if(node.left){
		if(node.left.val < node.val) {
			checkBinaryTree(node.left)
		} else {
			result = false;
		}
	}
	if(node.right) {
		if(node.right.val > node.val) {
			checkBinaryTree(node.right)
		} else {
			result = false;
		}
	}
	return result
}

console.log(checkBinaryTree(node1))