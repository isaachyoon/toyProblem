function permutations(arr, start){
	if(start > arr.length) {
		console.log(arr)
		return;
	} else {
		for(var i = 0; i < arr.length; i++) {
			console.log(start + " " + i + " " + arr)
			swap(arr, start, i)
			permutations(arr, start+1)
			swap(arr, start, i)
		}
	}
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

permutations([1, 2, 3], 0)