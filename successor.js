function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var node1 = new tree(7)
var node2 = node1.left = new tree(1)
var node3 = node1.right = new tree(9)
var node4 = node2.left = new tree(0)
var node5 = node2.right = new tree(3)
var node6 = node3.left = new tree(8)
var node7 = node3.right = new tree(10)
// var node8 = node4.left = new tree('H')
// var node9 = node4.right = new tree('I')
var node10 = node5.left = new tree(2)
var node11 = node5.right= new tree(5)
// var node12 = node6.left = new tree('L')
// var node13 = node6.right = new tree('M')
// var node14 = node7.left = new tree('N')
// var node15 = node7.right = new tree('O')
node11.left = new tree(4)
node11.right = new tree(6)


// function successor(node, target) {

// 	if(!node) {
// 		return;
// 	}
// 	if(node.val === target) {
// 		var solution = []
// 		solution.push(node.left)
// 		solution.push(node.right)
// 		return solution;
// 	}
// 	var leftSolution = successor(node.left, target)
// 	if(leftSolution) {
// 		return leftSolution
// 	}
// 	var rightSolution = successor(node.right, target)
// 	if(rightSolution){
// 		return rightSolution
// 	}
// }

// console.log(successor(node1, 38))

function inorderTraversal(node){
	if(!node){
		return
	}
	inorderTraversal(node.left)
	inorderTraversal(node.right)
	console.log(node.val)
}

inorderTraversal(node1)