function longestSuffix(str1, str2){
	var suffix = ''
	var newSuffix = '';
	var bool = true;
	var i = str1.length-1;
	var j = str2.length-1;
	if(str1[str1.length-1] !== str2[str2.length-1]) {
		return null;
	}
	while(bool) {
		if(str1[i] === str2[j] && bool) {
			suffix += str1[i]
		} else {
			bool = false;
		}
		i--;
		j--;
	}
	for(var i = suffix.length - 1; i >= 0; i --) {
		newSuffix += suffix[i]
	}
	return newSuffix
}

var outcome = longestSuffix('manhole', 'hanger');
console.log(outcome)


function insert(num){
	num = num.toString()
	var stack = [];
	var odd = true;
	stack.push(num[0])
	for(var i = 1; i < num.length; i ++) {
		odd = (stack[stack.length-1] % 2 === 0) ? false : true;
		if(num[i] % 2 === 0 && !odd ) {
			stack.push('-')
		} else if(num[i] % 2 !==0 && odd) {
			stack.push('*')
		}
		stack.push(num[i])
	}
	return stack.join('')
}

console.log(insert(1245790))