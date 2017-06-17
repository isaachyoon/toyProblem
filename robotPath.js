function robotPath(matrix, r, c) {
	console.log(matrix)
	console.log('r: ' + r + " c: " + c )
	r = r || 1;
	c = c || 1;
	if(r === matrix.length -1 && c === matrix.length -1) {
		return matrix[r][c];
	}
	if(r < 0 || c < 0 || r > matrix.length-1 || c > matrix.length-1) {
		return 0;
	} else if(r === 0 && c === 0) {
		matrix[r][c] = 1;
	} else if(r === 0 || c === 0) {
		matrix[r][c] = 1;
	} else if(matrix[r][c] !== 1) {
			matrix[r][c] = matrix[r-1][c] + matrix[r][c-1]
	}
		return robotPath(matrix, r+1, c) && robotPath(matrix, r, c+1)


}

function createGrid(n) {
	let matrix = []
	for(var i = 0; i < n; i++) {
		matrix[i] = [];
		for(var j = 0; j < n; j++) {
			if(i === 0 || j === 0) {
				matrix[i][j] = 1
			} else {
				matrix[i][j] = -1;
			}
		}
	}
	return matrix;
}

var grid = createGrid(4)

var output = robotPath(grid)
console.log(output);

