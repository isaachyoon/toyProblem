function highestProduct(arr){
	var highest = 0;
	for(var i = 0; i < arr.length; i ++) {
		for(var j = i+1; j < arr.length; j ++) {
			for(var k = j+1; k < arr.length; k++) {
				var product = arr[i] * arr[j] * arr[k];
				if(product > highest) {
					highest = product
				}
			}
		}
	}
	//[-10, -10, 1,   3,  2]
	    // ^              ^  ^
	return highest;

}
arr = [-10, -10, 1, 3, 2]
// console.log(highestProduct(arr))

//arr2 = [-10, 10, 1, 3, 2]

function highestProduct2(arr){
var point1 = 0;
var point2 = 0;
}

//constraints : O(n)
//linear space

var text = 'outside';
function logIt(){
	console.log(text);
	var text = 'inside';
};
logIt();