//KEY FINDING: MEMOIZE WILL REDUCE 5 SECOND RUN TIME TO .1 SEC!! (TRY FIB 43)

function fib(n, memo) {
	if(n === 1) {
		return 1
	} if(n === 2) {
		return 1
	} else if(!memo[n]) {
		memo[n] = fib(n-1, memo) + fib(n-2, memo)
	}
	return memo[n];
}

/*
 	TIME COMPLEXITY: Using implementation above reduces run time from O(2^n) to O(n)
 	SPACE COMPLEXITY: Non memoize solution (O(n)) but the number of recusion sitting at any point
*/

function memoize(func){
	var memo = {};

	return function(){
		var key = JSON.stringify(arguments)
		if(memo[key]) {
			return memo[key]
		} else {
			memo[key] = func.apply(this, arguments)
			return memo[key]
		}
	}
}

// var output = memoize(fib)(43)
// console.log(output)

var output = fib(43, {})
console.log(output)
/*
//0 1 1 2 3 5 8 13 21 34 55...
        ^
solution = fib(2) + fib (1)
             1       2

solution = fib(3) + fib(2)
          fib(2) + fib(1)
/*
n === 8 , solution is 13
solution = fib(n-1) + fib(n-2)

*/
//