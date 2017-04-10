function checkBracket(b1, b2){
	console.log('checkbracket : ' + b1 + " " + b2)
	if(b1 === '{' && b2 === '}') {
		return true;
	} else if (b1 === '(' && b2 === ')'){
		return true;
	} else if (b1 === '[' && b2 === ']') {
		return true;
	}
	return false;
}

// function balancedBracket(string){
// 	var result = 'YES';
// 	var open = [];
// 	var closed = [];
// 	for(var i =0 ; i < string.length; i ++) {
// 		if(string[i] === '{' || string[i] === '(' || string[i] === '[') {
// 			open.push(string[i])
// 		}
// 	}
// 	for (var i = string.length-1; i >= 0; i-- ){
// 		if(string[i] === '}' || string[i] === ')' || string[i] === ']') {
// 			closed.push(string[i])
// 		}
// 	}
// 	console.log('open', open)
// 	console.log('closed', closed)
// 	if(open.length !== closed.length){
// 		return 'NO'
// 	} else {
// 		for(var i = open.length -1; i >= 0; i--){
// 			if(checkBracket(open[i], closed[i])) {
// 				open.pop();
// 				closed.pop();
// 			} else {
// 				return 'NO'
// 			}
// 		}
// 	}
// 	return result;
// }

function balancedBracket(string){
	var stack1 = [];
	var stack2 = [];

	for(var i=0; i <string.length; i++) {
		stack1.push(string[i]);
	}
	while(stack1.length !== 0){
		var temp = stack1[stack1.length-1];
		var temp2 = stack2[stack2.length-1]
		console.log('temp1: ' + temp + " temp2: " + temp2)
		if(temp === '{' || temp === '(' || temp === '[') {
			if(checkBracket(temp, temp2)){
				stack1.pop();
				stack2.pop();
			} else {
				return 'NO';
			}
		} else {
			stack2.push(stack1.pop());
		}
	}

	if(stack1.length === 0 && stack2.length === 0) {
		return 'YES'
	} else {
		return 'NO'
	}
}

var result = balancedBracket('[[][]]')
console.log(result)