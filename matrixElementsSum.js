function matrixElementsSum(matrix) {
	var storage = {};
	var result = 0;
	for(var i = 0; i < matrix.length; i ++){
		for (var j = 0; j < matrix[i].length; j++ ){
			if(matrix[i][j] === 0) {
				storage[j] = 0;
			}
			if(storage[j] === 0) {
				matrix[i][j] = 0;
			}
			result += matrix[i][j];
		}
	}
	return result;
}

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]

// console.log(matrixElementsSum(matrix))

function allLongestStrings(inputArray) {
	var longest = 0;
	var result = [];
	for (var i =0 ; i < inputArray.length; i++) {
		if(inputArray[i].length > longest) {
			longest = inputArray[i].length;
		}
	}
	console.log('longest', longest)
	for (var i = 0; i < inputArray.length; i ++){
		if(inputArray[i].length === longest) {
			result.push(inputArray[i])
		}
	}
	return result;
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

function allLongestStrings2(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    console.log('maxSize', maxSize)
    return inputArray.filter(x => x.length === maxSize);
}
console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]))



function commonCharacterCount(s1, s2) {

}
