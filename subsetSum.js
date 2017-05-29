//
function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
function subsetSum(node1, arr, ind,  res, arr1){
	//basecase
	// console.log(ind)
	// console.log(node1)
	// console.log(ind + ' ' + arr.length)
	// console.log(agg)
	arr1 = arr1 || [];


	if(ind > arr.length) {
		return;
	}
	arr1.push(node1.val)

	if(arr1.length === 4) {
		res.push(arr1)
	}


	node1.left = new node(node1.val + arr[ind])
	var left = subsetSum(node1.left, arr, ind+1,  res, Array.from(arr1))
	node1.right = new node(node1.val)
	var right = subsetSum(node1.right, arr, ind+1, res, Array.from(arr1))



	// if(left || right) {
	// 	console.log('yes', node1.val)
	// 	return true;
	// }
	//

}


var start = new node(0)
var arr2 = [1,2,3]
var arr = [1, 2, 5, 6, 8]
var outcome = subsetSum(start, arr2, 0, [])
console.log(outcome)


//////////////////////////////////////////
function bft(tree) {
	var queue = [];
	queue.push(tree);
	while(queue.length !== 0){
		var length = queue.length
		for(var i = 0; i < length; i++ ) {
			if(queue[0].left) {
				queue.push(queue[0].left)
			}
			if(queue[0].right) {
				queue.push(queue[0].right)
			}
			// console.log(queue[0].val)
			queue.shift();
		}
	}

}

var practiceTree = new node(1)
practiceTree.left = new node(2)
practiceTree.right = new node(3)
practiceTree.left.left = new node(4)
practiceTree.left.right = new node(5)
practiceTree.right.left = new node(6)
practiceTree.right.right = new node(7)

bft(start)

