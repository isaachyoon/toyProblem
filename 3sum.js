// find threeSum
//

function findThreeSum(arr){
	resArr = []
	for(var i = 0; i < arr.length; i++) {
		//set pointer to the i + 1
		var pointBeg = i + 1;
		//set pointer to the last element
		var pointEnd = arr.length - 1;
		//if currentIndex, beg pointer, and the last pointer doesn't add up to zero, then increment/decrement
		while(pointBeg < pointEnd) {
			var sum = arr[i] + arr[pointBeg] + arr[pointEnd];
			console.log('sum' , sum)
			if(sum === 0 ){
				resArr.push([arr[i], arr[pointBeg], arr[pointEnd]]);
				break
			} else if(sum < 0) {
				pointBeg++
			} else {
				pointEnd--
			}
		}
	}
	return resArr;
}
// findThreeSum([-4, -1, -1, 0, 1, 2])

var threeSum = function(nums) {
	nums = nums.sort((x,y) => x-y)
  resArr = []
	for(var i = 0; i < nums.length; i++) {

		//set pointer to the i + 1

		var pointBeg = i + 1;
	//set pointer to the last element
		var pointEnd = nums.length - 1;
		//if currentIndex, beg pointer, and the last pointer doesn't add up to zero, then increment/decrement
		while(pointBeg < pointEnd) {
			var sum = nums[i] + nums[pointBeg] + nums[pointEnd];
			if(sum === 0 ){
				resArr.push([nums[i], nums[pointBeg], nums[pointEnd]]);
				break;
			} else if(sum < 0) {
				pointBeg++
			} else {
				pointEnd--
			}
		}


	}
	return resArr;
};

console.log(threeSum([0, 0, 0, 0 , 0]))
