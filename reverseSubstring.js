function reverseSubstring(str, n){
	var newString = ''
	for(var i = 0; i < str.length; i ++) {
		if((i + 1) % n === 0) {
			console.log('i', i)
			console.log('entered')
			for(var j = i; j + n > i ; j--) {
				newString += str[j]
			}
		}
	}
	var leftOver = str.length % n;
	console.log('before', newString)
	console.log('leftOver', leftOver)
	for(var i = str.length - 1; i + leftOver > str.length - 1; i--) {
		newString += str[i]
	}
	return newString
}

console.log(reverseSubstring('abcdef', 5))

//badcfe
