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

console.log(matrixElementsSum(matrix))