var arr = [540, 570 , 490 , 460 , 530 , 600 , 550 , 500]
														// ^					 ^

function findProfit(arr){
	var profit = 0;
	for(var i = arr.length-1; i > 0; i--) {
		for(var j = i -1; j > 0; j-- ) {
			if(arr[i] - arr[j] > profit) {
				profit = arr[i] - arr[j];
			}
		}
	}
	return profit
}


function findProfit2(arr) {
	var min = arr[0];
	var maxProfit = 0;

	for(var i = 0; i <arr.length; i ++) {
		if(arr[i] < min){
			min = arr[i]
		}
		if(arr[i] - min > maxProfit) {
			maxProfit = arr[i] - min;
		}
	}
	return maxProfit;
}

console.log(findProfit2(arr))

//minPrice = 540
//maxProfit = maximum value we've seen - minPrice