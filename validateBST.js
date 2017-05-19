function tree(val){
	this.val = val;
	this.left = null;
	this.right = null;
}

var node1 = new tree(50)
var node2 = node1.left = new tree(30)
var node3 = node1.right = new tree(80)
var node4 = node2.left = new tree(20)
var node5 = node2.right = new tree(20)
var node6 = node3.left = new tree(70)
var node7 = node3.right = new tree(90)
var node8 = node4.left = new tree(10)
// var node9 = node4.right = new tree('I')
// var node10 = node5.left = new tree('J')
// var node11 = node5.right= new tree('K')
var node12 = node6.left = new tree(60)
// var node13 = node6.right = new tree('M')
var node14 = node7.left = new tree(85)
var node15 = node7.right = new tree(100)

// var validateBST = function(node) {
// 	if(!node.left && !node.right){
// 		return true;
// 	}
// 	if(node.left) {
// 		if(node.left.val < node.val) {
// 			var left = validateBST(node.left);
// 		} else {
// 			left = false;
// 		}
// 	}
// 	if(node.right) {
// 		if(node.right.val > node.val) {
// 			var right = validateBST(node.right);
// 		} else {
// 			right = false;
// 		}
// 	}

// 	if(left && right) {
// 		return true;
// 	} else if (!left || !right){
// 		return false;
// 	}
// }

function compareNodes(node, min, max) {
	//if it recurses all the way down, it means that it returns true

	if(!node) {
		return true;
	}
	console.log(node.val)

	if(min < node.val && node.val < max) {
		// var left = compareNodes(node.left, min, node.val)
		// var right = compareNodes(node.right, node.val, max)
		// return (left && right) || false
		return (compareNodes(node.left, min, node.val) &&  compareNodes(node.right, node.val, max))
	} else {
		return false;
	}
}

function validateBST(node){
	return compareNodes(node, -999999, 999999 )
}

console.log(validateBST(node1))