function rootOfNumber(x, n, min, max){
	min = min  || 0;
	max = max || x;
	var guess = (min + max) / 2
	console.log(guess)
	if(Math.round(Math.round(Math.pow(guess, n) * 100) / 100) === x) {
		return guess;
	}
	if(Math.pow(guess, n) < x) {
		return rootOfNumber(x, n, guess, max)
	} else if(Math.pow(guess, n) > x) {
		return rootOfNumber(x, n, min, guess)
	}

}

//1.913 ^ 3 = 7



console.log(rootOfNumber(9, 2))
