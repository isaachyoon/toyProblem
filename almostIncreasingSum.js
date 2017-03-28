var almostIncreasingSum = function(sequence) {

	var possible = sequence.slice();

	var resultAtt = [];
	var count = 0;
	var flag1 = true;

	for(var i = 0 ; i < possible.length ; i ++) {
		if(possible[i+1] <= possible[i]) {
			console.log('sliced', possible[i])
			possible.splice(i, 1);
			break;
		}
	}
	console.log('possible', possible)
	for(var i = 0 ; i < possible.length; i ++) {
 		if(possible[i+1] <= possible[i]) {
 				flag1 = false;
 		}
 	}
 	console.log('result', flag1)
	if (flag1) {
 		return true;
	} else {
		flag1 = true;
 		for(var i = 0 ; i < sequence.length ; i ++) {
			if(sequence[i+1] <= sequence[i]) {
				console.log('sliced', possible[i+1])
				sequence.splice(i+1, 1);
				break;
			}
		}
 		console.log('sequence', sequence);
 		for(var i = 0; i < sequence.length; i++){
 			if(sequence[i+1] <= sequence[i]) {
 				return false;
 			}
		}
	}
	return flag1;
}

// console.log(almostIncreasingSum([1,2,3,4,3,6]))
// console.log(almostIncreasingSum([1,4,10,4,2]))
// console.log(almostIncreasingSum([10,1,2,3,4,5]))
// console.log(almostIncreasingSum([1,2,3,4,99, 5, 6]))
// console.log(almostIncreasingSum([1,2,1,2]))
// console.log(almostIncreasingSum([1,4,2,3,4]))
console.log(almostIncreasingSum([-997, -978, -975, -968, -959, -956, -907, -872, -871, -858, -836, -827, -823, -794, -786, -771, -740, -728, -716, -711, -697, -660, -659, -638, -633, -607, -601, -597, -573, -562, -548, -536, -517, -500, -433, -402, -387, -384, -301, -291, -283, -270, -252, -240, -230, -221, -215, -202, -200, -185, -171, -73, -47, -38, -34, -17, -3, 8, 42, 56, 65, 133, 140, 146, 180, 192, 201, 233, 241, 256, 285, 302, 320, 353, 324, 420, 428, 429, 442, 470, 487, 542, 547, 561, 564, 664, 666, 670, 693, 738, 793, 824, 845, 848, 864, 929, 931, 952, 985, 997, 1]))

