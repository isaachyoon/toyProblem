var kclosestElement = function(k, x, arr) {
	arr.sort((a,b) => {
		if (a=== x || b===x) {
			return;
		}	else {
			return Math.abs(a-x) - Math.abs(b-x)
		}
	})
	// console.log(arr)
	return arr.slice(0, k)
}

var output = kclosestElement(4, 35, [12, 16, 22, 30, 35,39, 42, 45, 48, 50, 53, 55, 56])
// console.log(output)

var kclosestElement2 = function(k, x, arr) {
	var resArr = [];
	var index = findIndex(x, 0, arr.length - 1, arr)
	var leftIndex = index - 1;
	var rightIndex = index + 1;
	for(var i = 0; i < k; i ++ ){
		if(Math.abs(x - arr[leftIndex]) < Math.abs(x-arr[rightIndex])) {
			resArr.push(arr[leftIndex]);
			leftIndex--;
		} else {
			resArr.push(arr[rightIndex]);
			rightIndex++;
		}
	}
	return resArr;
}

function findIndex(x, low, high, arr) {
	if(low > high) {
		return -1;
	}
	mid = Math.floor((high + low) / 2 );

	if(arr[mid] === x){
		return mid;
	}

	var left = findIndex(x,low, mid - 1, arr)
	var right = findIndex(x, mid + 1, high, arr)

	return Math.max(left, right)

}

var output = kclosestElement2(4, 35, [12, 16, 22, 30, 35,39, 42, 45, 48, 50, 53, 55, 56])
console.log(output)