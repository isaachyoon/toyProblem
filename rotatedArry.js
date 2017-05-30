function findMinRotatedArray(arr, min = 0, max = arr.length -1, target = 9999) {
	mid = Math.ceil((min + max) / 2);
	target = (arr[mid] < target)? mid : mid+1;


	if(min >= max) {
		// console.log(target)
		return target
	}

	//min is in the right
	if(arr[0] < arr[mid]) {
		return findMinRotatedArray(arr, mid + 1, max, target)
	}
	//min is the left
	else if(arr[0] > arr[mid]) {
		return findMinRotatedArray(arr, min, mid - 1, target)
	}

}


var arr = [6, 7, 9, 13, 14, -6, -2, -1,0,1,2,3,4,5];
var arr2 = [6,7,9,13,14,2,3,4];
var arr3 = [7, 9, 11 , 13, 15, 2, 4, 6 ]
var arr4 = [ 9, 11, 13, 15, 7 ]
var arr5 = [10, 11, 12, 13, 1, 2, 3, 4, 5, 6]
var arr6 = [13, 14, -4,-3, -2, -1 , 0, 1, 2, 3, 4, 5, 6, 7]
console.log(findMinRotatedArray(arr6))

//go left  - it's smaller than right [7,9,11,13,15,2,4,6] -- the num is on the right
//go left - it's bigger than right	 [15,2,4,6,7,9,11,13] --
//go right - it's smaller than right []
//go right - it's bigger than right  []

function findXRotatedArry(arr,  target) {
	var findPivot = findMinRotatedArray(arr);
	//solution is the on left of pivot
	if(arr[arr.length - 1] > target) {
		console.log('before')
		return findX(arr, target, findPivot, arr.length - 1)
	}
	//solution is on the right of pivot
	else {
		console.log('after')
		return findX(arr, target, 0, findPivot-1)
	}
}

function findX(arr, target, min, max) {

	mid = Math.floor((min + max) / 2)
	if(min > max) {
		return -1;
	}
	if(arr[mid] === target){
		console.log('entered', arr[mid])
		return target
	} else {
		if(arr[mid] < target) {
			return findX(arr, target, mid + 1, max )
		} else {
			return findX(arr, target, min, mid-1 )
		}
	}
}

// console.log(findXRotatedArry(arr, 13))