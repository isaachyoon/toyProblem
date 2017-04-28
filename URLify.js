var URLify = function(str, n){
	var j = str.length -1;
	str = str.split("");
	for(var i = n-1; i > 0; i --) {
		if(str[i] === " ") {
			str[j] = '0'
			str[j-1] = '2'
			str[j-2] = '%'
			j -= 3
		} else {
			str[j] = str[i]
			j--;
		}

	}
	return str.join("")
}

console.log(URLify('hello World  ', 11))