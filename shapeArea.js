function shapeArea(n) {
	return n*n + Math.pow(n-1, 2)
}

console.log(shapeArea(4))
//1 => 1
//2 => 5 = 2 * 2 + 1
//3 => 13 = 3 * 3 + 4
//4 => 24 = 4 * 4 + 9

function makeArrayConsecutive2(statues) {
	var difference = 0;
	statues = statues.sort((a,b) => a-b)

	for(var i =0; i <statues.length -1; i ++) {
		difference += statues[i+1] - statues[i] - 1

	}

	return difference
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))