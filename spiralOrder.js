var spiralOrder = function(matrix) {

	var resultArr = [];
	var fullCirc = false;
	function moveRight(y,x) {
		// console.log('write something', matrix[y])
		// console.log(matrix[y].slice(1))
		while(x < matrix[y].length) {
			resultArr.push(matrix[y][x++]);
		}
		matrix = matrix.slice(1)
	}

	function moveDown (y,x) {
		while(y < matrix[0].length) {
			resultArr.push(matrix[y][x])
			matrix[y].pop()
			y++;
		}
	}

	function moveLeft (y,x) {
		while(x >= 0) {
			resultArr.push(matrix[y][x--])
		}
		matrix = matrix.slice(0,1)
	}

	function moveUp (y,x) {
		console.log(y + "|" + x)
		while(y > 0) {
			resultArr.push(matrix[--y][x])
		}
		matrix = matrix[x].slice(1)
		console.log('move up again' , matrix)

	}

	while(matrix !== null ) {
		if(matrix.length===1){
			console.log('entered');
			resultArr.push(matrix[0]);
			return resultArr;
		}
		moveRight(0, 0)
		console.log('matrix first', resultArr)
		finished()

		moveDown(0, matrix[0].length-1)
		console.log('matrix', resultArr)
		finished()

		moveLeft(matrix[0].length-1 , matrix[0].length -1)
		console.log('matrix',matrix)
		finished()

		moveUp(matrix[0].length -1 , 0)
		console.log('matrix',resultArr)
		finished()
	}

	function finished(){
		if(matrix === null) {
			return resultArr;
		}
	}


  // for (var i = 0; i < 1; i ++) {
  // 	for (var j = 0 ; j )
  // }


};

console.log( 'yo',
	spiralOrder([
		[ 1, 2, 3 ],
 		[ 5, 6, 7 ],
 		[ 9, 10, 11]

	])
)