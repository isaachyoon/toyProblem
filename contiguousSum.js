function contiguousSum(arr){
	var maxSum = 0;
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum += arr[i]
		if(sum + arr[i+1] < 0) {
			if(sum > maxSum) {
				maxSum = sum;
			}
			sum = 0;
		}

	}
	return maxSum;
}

// arr = [2, -8, 3, -2, 4, -10]
// console.log(contiguousSum(arr))

function subSort(arr){
	var current = 0;
	var mIndex = Number.POSITIVE_INFINITY;
	var nIndex = 0;
	for(var i = 0; i < arr.length-1; i++) {
		current = arr[i];

		if(current > arr[i+1]) {
			console.log()
			mIndex = Math.min(mIndex, checkProperIndex(arr[i+1], arr))
			nIndex = i+2
		}
	}
	return [mIndex, nIndex]
}

function subSort2(arr){
	var begInd = 0;
	var endInd = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i+1]) {
			begInd = i+1;
			break;
		}
	}
	for(var i = arr.length - 1; i > 0; i--) {
		if(arr[i] < arr[i-1]) {
			console.log('i', arr[i])
			console.log('i-1', arr[i-1])
			endInd = i;
			break;
		}
	}
	var mid = arr.slice(begInd, endInd)
	var min = Math.min(...mid);
	var max = Math.max(...mid);

	return [checkProperIndex(min, arr), checkProperIndexfromEnd(max, arr)]
}

function checkProperIndex(num, arr) {
	console.log('arr', num)
	for(var i = 0; i < arr.length; i++) {
		if(num <= arr[i]) {
			return i;
		}
	}
}

function checkProperIndexfromEnd(num, arr) {
	for(var i = arr.length - 1; i > 0; i--) {
		if(num >= arr[i]) {
			return i;
		}
	}
}
//[1,2,4,7,10,11]
//[7, 12, 6, 7] => sort ( 6, 7, 7, 12) => math.min() & math.Max()
//[16, 18, 19]
var arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
console.log(subSort2(arr))


                     //should go on the 3rd index

/*
appraoch 1:

keep track of all the numbers iterating.

*/