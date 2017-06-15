function deletionDistance(str1, str2){
	//step 1. create an matrix that is 1 size bigger (I used a helper function to create a quick grid)
	var matrix = createMatrix(str1.length+1 , str2.length+1)


	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j ++) {
			/////2. I am going to set the grid with numbers
			if (i === 0) {
				matrix[i][j] = j;
			} else if (j === 0) {
				matrix[i][j] = i
			}
			/*
				stpe two creates the counting mechanism (with frog and dog, it will create the following)
				    f r o g   <-- frog and dog are written for your reference
					0 1 2 3 4
				d	1
				o	2
				g	3
			*/
     ///////////


     //step 3: we are going to compare whether the intersections are same
			else {
				if(str1[i-1] === str2[j-1]) {
					matrix[i][j] = matrix[i-1][j-1]
				} else if (str1[i-1] !== str2[j-1]) {
					matrix[i][j] = 1 + Math.min(matrix[i][j-1], matrix[i-1][j])
				}
			}
			/*
			if the intersection aren't same, take the minimum of number immediate to the top or immediately to the left
					  f r o g
					0 1 2 3 4
				d	1 *        -> number immediately to the top is 1 and immediate to the left is 1. Since they are same, you just take 1 and ADD 1
				o	2
				g	3

		        f r o g
					0 1 2 3 4
				d	1 2 3 4 5
				o	2 3 4 *     -> if the intersected numbers are same, then you take the number directly across [i-1][j-1] and
				g	3              set it to that value. in this case is 3.


				    f r o g
					0 1 2 3 4
				d	1 2 3 4 5
				o	2 3 4 3 *    -> 'g' and 'o' aren't same so take the smaller the number immediate to the top and left (5 vs 3) and ADD ONE
				g	3

				    f r o g
					0 1 2 3 4
				d	1 2 3 4 5
				o	2 3 4 3 4
				g	3 4 5 4 3    return the value at the end of matrix.

				OVERALL IDEA: MATRIX KEEP TRACK OF DIFFERENCE IN CHARACTER - EX.('FR' vs 'D' has a difference in character of 3)
			*/
		}



	}
	console.log(matrix)
	return matrix[str1.length][str2.length]
}


function createMatrix(x, y) {

	let matrix = [];
 	for(let i = 0; i < x; i ++) {
 		matrix[i] = new Array(y);

	}

	return matrix;
}


var output = deletionDistance('dog', 'frog')
console.log(output)
