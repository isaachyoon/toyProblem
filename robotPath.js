/*
KEY FINDING:
1. IF THE RECUSIVE FUNCTION IS NOT GREAT ENOUGH, IT WILL TAKE LONGER BECUASE YOU HAVE TO STORE INTO MEMORY AS YOU CACHE RESULTS.
2. THERE IS A WAY TO DO IT ITERATIVELY WITHOUT USING DYNAMIC PROGRAMMING. IT ESSENTIALLY USES THE IDEA OF DYNAMIC PROBLEMING AND STATICALLY APPLIES IT
3. MAKE SURE TO RETURN 0 RATHER THAN RETURN BECAUSE IN THIS CASE, THE NUMBERS ARE ADDED UP


*/

function robotPath(matrix, r, c, memo) {
	var key = JSON.stringify(r + ':' + c)
	// console.log(key)

	if(r === matrix.length-1 && c === matrix.length - 1) {
		// console.log('reached')
		return 1;
	} else if (r >= matrix.length || c >= matrix.length) {
		return 0;
	}
	else if (matrix[r][c] === 'X'){
		return 0;
	}
	// var output = (robotPath(matrix, r+1, c, memo) + robotPath(matrix,r,c+1, memo))
	// return output
	else if (!memo[key]) {
		memo[key] = (robotPath(matrix, r+1, c, memo) + robotPath(matrix,r,c+1, memo))
	}
	return memo[key]
}


var grid = [
	['-1','-1','-1','-1','-1','-1'],

	['-1','X','-1','-1','-1','-1'],

	['-1','-1','-1','-1','X','-1'],

	['-1','-1','X','-1','-1','-1'],

	['-1','-1','-1','X','-1','-1'],

	['-1','X','-1','-1','-1','-1']
]

var output = robotPath(grid, 0, 0, {})
console.log(output)


