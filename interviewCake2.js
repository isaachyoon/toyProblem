

function productOfAllInteger(arr){
	var leftToRight = [];
	var subtotal = 1;
	for(var i = 0; i < arr.length; i++) {
		subtotal *= arr[i];
		leftToRight.push(subtotal);
	}
	console.log(leftToRight)
	subtotal = 1;
	for(var j = arr.length - 1; j > 0; j--) {
		subtotal *= arr[j];
		arr[j] = subtotal
	}

	var resArr = [];
	console.log(arr.length);
	for(var i = 0; i < 4; i++ ){
		arr[i+1] = arr[i+1] || 1;
		console.log(arr[i+1])
		leftToRight[i-1] = leftToRight[i-1] || 1;
		console.log(leftToRight[i-1])
		resArr.push(leftToRight[i-1] * arr[i+1])
	}
	console.log('resArr', resArr)
}

var arr = [1, 7, 3, 4]

// productOfAllInteger(arr)

function productOfAllInteger2(arr) {
	var arr1 = [1];
	var subtotal = 1;
	for(var i = 1; i < arr.length; i ++) {
		subtotal *= arr[i-1]
		// console.log(subtotal)
		arr1[i] = subtotal;
	}
	subtotal = arr.length-1;
	for(var i = arr.length - 2; i >= 0; i--) {
		console.log(arr)
		subtotal *= arr[i+1]
		arr[i] =  subtotal
	}
	console.log(arr)
}

productOfAllInteger2(arr)
