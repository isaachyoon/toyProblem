function palindromePermutation(input){
	input = input.replace(' ', '')
	input = input.toLowerCase();
	var obj = {};
	for(var i = 0; i <input.length; i++){
		// (!obj[input[i]]): obj[input[i]] = 0 ? obj[input[i]] ++

		(obj[input[i]] === undefined) ? obj[input[i]] = 1 : obj[input[i]]++
		// if(!obj[input[i]]) {
		// 	obj[input[i]] = 0
		// }
		// obj[input[i]] ++;
	}
	console.log(obj)

	var odd = 0;
	for (var key in obj) {
		if(obj[key] % 2 !== 0) {
			odd ++
		}
	}
	if(input.length % 2 === 0) {
		if(odd === 0) {
			return true;
		}
	} else {
		if(odd === 1) {
			return true;
		}
	}
	return false

}

console.log(palindromePermutation('abcd abcf'))