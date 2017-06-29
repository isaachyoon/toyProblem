function sentenceReverse(arr) {
	swapPlace(0, arr.length-1, arr)
	// console.log(arr)
	var spaceInd = 0;
	for(var i = 0; i < arr.length; i++ ) {
		if(arr[i] === '  ') {
			swapPlace(spaceInd, i-1, arr)
			spaceInd = i+1
		}
		if(i == arr.length - 1) {
			swapPlace(spaceInd, i, arr)
		}
	}
	console.log(arr)
}

function swapPlace(start, end, arr) {
	while(start < end) {
		var temp = arr[start]
		arr[start] = arr[end]
		arr[end] = temp
		start++;
		end--;
	}
}

arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

sentenceReverse(arr)