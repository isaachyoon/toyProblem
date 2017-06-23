function rotatedPoint(arr){
	let min = 0;
	let max = arr.length - 1;
	var checker = 'min';

	while(min < max) {
		let mid = Math.floor((min + max)/2)

		if(min+1 === max) {
			return arr[max]
		}

		if(arr[min][0] < arr[mid][0]) {
			//go right
			min = mid;
		} else {
			//go left
			max = mid;
		}

	}
	return arr[min]
}

// var words = ['p', 'r', 's', 'u', 'x', 'a', 'b', 'e', 'k', 'o']

//          = [6, 7, 8, 9, 1, 3, 4, 5]
// 							^										^
var words = ['ptolemaic', 'retrograde', 'supplant','undulate','xenoepist', 'baaab', 'babka','banoffee','engender','karpatka','othellolagkage']
//							min																									mid																											max
var output = rotatedPoint(words)
console.log(output)
/*
	if(first letter of mid value is < max val)
		//move left
	//else move right
*/