function getPath(n){
	var grid = createGrid(n)
	return findPath(grid, n-1 , n-1)
}

function createGrid(n){
	var matrix = [];
	for(var r = 0; r < n; r ++) {
		matrix[r] = []
		for(var c = 0 ; c < n; c++) {
			if(r === 1 && c === 1) {
				matrix[r][c] = 'X'
			} else if (r === 1 && c === 2) {
				matrix[r][c] = 'X'
			} else {
				matrix[r][c] = -1
			}
		}
	}
	// console.log(matrix)
	return matrix
}









function findPath(grid, r, c) {
	console.log(r + " : " + c)
	if(r === 0 && r === 0) {
		grid[r][c] = true
		return true;
	} else if (grid[r][c] === 'X'){
		return false;
	} else if (r < 0 || c < 0) {
		return;
	} else {
		grid[r][c] = findPath(grid, r-1, c) || findPath(grid, r, c-1)
	}
	return grid[r][c]
}


var output = getPath(3)
console.log(output)



/*
top down approach makes it difficult for us to recurse down, find the first path that works and returns.


function findPath(grid, r, c) {
	console.log(r + ' : ' + c)

	var gridLength = grid.length - 1

	if(r === gridLength && c === gridLength){
		console.log('entered')
		return true;
	}

	if(r > gridLength || c > gridLength) {
		return;
	}

	//if we put return statement on both recursive function, it will never reach the second one.
	findPath(grid, r, c+1)
	findPath(grid, r+1, c)

}

*/


