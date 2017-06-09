function findRepeat(arr) {
	for(var i = 0; i < arr.length; i ++) {
		let index = Math.abs(arr[i])
		if(arr[index] < 0) {
			return index
		} else {
			arr[index] *= -1
			console.log(arr)
		}
	}
}

let output = findRepeat([3, 4, 2, 3, 1, 5])
console.log(output)