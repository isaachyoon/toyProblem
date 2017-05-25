//Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns an index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

function pramp(arr) {

	return findIndex(arr, 0, arr.length-1)

}

function findIndex(arr, min, max) {
	var mid = Math.floor((max + min) / 2);
	if(min > max){
		return -1;
	}
	if(arr[mid] === mid) {
		return mid;
	}
	if(mid < arr[mid]) {
		return findIndex(arr, min, mid-1)
	} else {
		return findIndex(arr, mid+1, max)
	}
}
var arr = [-1, 0 , 3, 6]
var arr2 = [-8, 0, 2, 5]
// console.log(pramp(arr))

function indexEqualsValueSearch(arr) {
	var start = 0;
	var end = arr.length -1;
	while(start <= end) {
		mid = Math.floor((start+end)/2);
		if(arr[mid] === mid) {
			return mid;
		} else if(mid < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

console.log(indexEqualsValueSearch(arr2))
