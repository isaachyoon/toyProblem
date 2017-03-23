var almostIncreasingSum = function(sequence) {

	var resultAtt = [];
	var count = 0;

	for(var i = 0 ; i < sequence.length ; i ++) {
		if(sequence[i+1] - sequence[i] <= 0) {
			count++;
			if(count === 2) {
				return false
			}
		}
	}
	return true;
}

console.log(almostIncreasingSum([1,2,3,4,3,6]))
console.log(almostIncreasingSum([1,4,10,4,2]))
console.log(almostIncreasingSum([10,1,2,3,4,5]))
console.log(almostIncreasingSum([1,2,3,4,99, 5, 6]))
console.log(almostIncreasingSum([1,2,1,2]))
console.log(almostIncreasingSum([1,4,2,3, 4]))

