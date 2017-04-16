var binarySearch = function(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

binarySearch.prototype.insert = function(val){
	if(val < this.val) {
		if(this.left === null) {
			this.left = new binarySearch(val)
		} else {
			this.left.insert(val)
		}
	} else {
		if(this.right === null){
			this.right = new binarySearch(val);
		} else {
			this.right.insert(val)
		}
	}
}




function minHeightTree(arr){
	var pointer = tree = null
	construct(tree, arr, 0, arr.length)
	return
}


function construct(tree, arr, low, high){
	if(high-low < 0) {
		return;
	}
	if(!tree) {
		let mid = Math.floor((low + high) / 2);
		tree = new binarySearch(arr[mid])
		construct(tree, arr, low, mid - 1)
		construct(tree, arr, mid + 1, high)
	} else {
		let mid = Math.floor((low + high) / 2);
		tree.insert(arr[mid])
		construct(tree, arr, low, mid - 1)
		construct(tree, arr, mid + 1, high)
	}

}
console.log(minHeightTree([1,2,3,4,5,6,7,]))
//