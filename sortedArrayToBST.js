var tree = function(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

function helper(arr, min, max) {
	if (min > max) {
		return null;
	}
	var mid = Math.ceil((min + max) / 2);
	var treeNode = new tree(arr[mid]);
	treeNode.left = helper(arr, min, mid - 1);
	treeNode.right = helper(arr, mid + 1, max);
	return treeNode;
}

function sortedArrayToBST(arr){
	if(arr.length === 0) {
		return null;
	}
	var pointer = helper(arr, 0, arr.length - 1);
	return pointer;
}


var result = sortedArrayToBST([1, 5, 6, 8, 9,11, 12, 20, 27])
console.log(result)
