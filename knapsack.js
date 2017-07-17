//Given a list of items with values and weights as well as max weight, find the maximum value you can generate from items where the sum of the weights is less than the max.


/*
brute force method is to generate all possible permutations of weight that equals 50.
then multiply the weight by the values and return the one that equals the highest

           50
  10 /   20 |   30 \
  40     30        20

  time complexity: O(2^n) every instance it creates 2 different recursion
*/
var weights = [10, 20, 30];
var values = [60, 100, 120];
var limit = 50;
// var values = {
// 	10: 60,
// 	20: 100,
// 	30: 120
// }

////////////////////////////////////////////////////////////////////////////////
															//Top down apporoach//
////////////////////////////////////////////////////////////////////////////////


function knapsack(limit, weights, values) {
	return knapsackHelper(limit, weights, values, 0 )
}

function knapsackHelper(limit, weights, values, ind) {
	if(ind === weights.length) {
		return 0
	} if(limit - weights[ind] < 0) {
		return knapsackHelper(limit, weights, values, ind+1)
	}

	return Math.max(
		knapsackHelper(limit - weights[ind], weights, values, ind + 1) + values[ind] ,
		knapsackHelper(limit, weights, values, ind + 1)
	);
}


////////////////////////////////////////////////////////////////////////////////
															//Using Subroutine//
////////////////////////////////////////////////////////////////////////////////
function knapsack2(weights, values) {
	var totalValue = 0;
	function knapsackHelper(weights, values, ind, totalVal ) {
		if(ind >= weights.length) {
			return;
		}
		if(totalVal > totalValue) {
			totalValue = totalVal
		}
		//add
		knapsackHelper(weights, values, ind + 1, totalVal + values[ind + 1])
		//don't add
		knapsackHelper(weights, values, ind + 1, totalVal)

	}
	knapsackHelper(weights,values, 0, 0)
	return totalValue
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var output = knapsack(limit, weights, values)
console.log(output)
