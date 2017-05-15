function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var node1 = new tree('a')
var node2 = node1.left = new tree('b')
var node3 = node1.right = new tree('c')
var node4 = node2.left = new tree('d')
var node5 = node2.right = new tree('e')
var node6 = node3.left = new tree('f')
var node7 = node3.right = new tree('g')
var node8 = node4.left = new tree('h')
var node9 = node4.right = new tree('i')
// var node10 = node5.left = new tree(2)
// var node11 = node5.right= new tree(5)
// var node12 = node6.left = new tree('L')
// var node13 = node6.right = new tree('M')
// var node14 = node7.left = new tree(12)
// var node15 = node7.right = new tree(15)
// node11.left = new tree(4)
// node11.right = new tree(6)
function postOrder(tree) {
	if(!tree){
		return
	}
	postOrder(tree.left)
	postOrder(tree.right)
	console.log(tree.val)

}

postOrder(node1)

function findAncestor(tree, val1, val2 ) {
	// resArr = resArr || [];
	if(!tree) {
		return null ;
	}

	if(tree.val === val1 || tree.val === val2) {
		return tree.val;
	}


	var nodeLeft = findAncestor(tree.left, val1, val2)
	var nodeRight = findAncestor(tree.right, val1, val2)


	if(nodeLeft === val1 && nodeRight === val2) {
		return tree.val
	} else if(nodeLeft === val2 && nodeRight === val1) {
		return tree.val
	} else {
		return nodeLeft || nodeRight
	}
}

console.log(findAncestor(node1, 'd', 'i'))