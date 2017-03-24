var singleNumber = function(nums) {
    //[1, 2, 1, 2, 3, 4, 4]
    var resultObj = {};

    var temp = -1;
    for(var i = 0 ; i < nums.length; i++) {
    	temp = nums[i]
    }
};

var printPound = function(num) {

	var result = "";
	function pound(numOfSpace, numOfPound) {
		for (var i = 0; i < numOfSpace; i++ ) {
			result += "_ "
		}
		for ( var j = 0; j < numOfPound; j++) {
			result += '#'
		}
		console.log(result);
		result = ""
		if (numOfSpace === 0 && numOfPound === num) {
			return;
		} else {
			pound(numOfSpace-1, numOfPound+1)
		}
	}
	pound(num-1, 1)
}

printPound(3)
//output
//" " " " #
//" " # #
// # # #
var consecutiveCount = function(array){
	var consecutiveCount = 0;
	var longest = 1;
	for(var i = 0 ; i <array.length; i ++) {
		if(array[i] + 1 === array[i+1]) {
			consecutiveCount++;
		} else {
			if(longest < consecutiveCount) {
				longest = consecutiveCount;
				consecutiveCount = 1;
			}
		}
	}
	return longest;
}

var result = consecutiveCount([1,3,4,5,6,8,10,11,12,13,14,15,17,20])
// console.log(result);