let tree = function(val){
	this.val = val
	this.left = null;
	this.right = null;
}

tree.prototype.insert = function(val){
	if(val < this.val) {
		if(this.left === null){
			this.left = new tree(val)
		} else {
			this.left.insert(val)
		}
	} else if (val > this.val) {
		if(this.right === null){
			this.right = new tree(val)
		} else {
			this.right.insert(val)
		}
	}
}


let minimalTreeHelper = function(bTree, arr, min, max){
	var mid = Math.floor((min + max) / 2);
	if((max - min) < 0) {
		return;
	}

	if(bTree === null) {
		bTree = new tree(arr[mid]);
	} else {
		bTree.insert(arr[mid]);
	}

	var minBinaryTreeLeft = minimalTreeHelper(bTree, arr, 0, mid - 1);
	var minBinaryTreeRight = minimalTreeHelper(bTree, arr, mid + 1, max)


	return bTree

}

let minimalTree = function(arr){
	var headTree = null
	return minimalTreeHelper(headTree, arr, 0, arr.length - 1)

}

console.log(minimalTree([1,2,3,4,5,6,7,8,9]))