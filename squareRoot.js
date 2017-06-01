

function modulo(num1, num2) {
  // your code here
 if (num2 === 0 || isNaN(num1) || isNaN(num2)) {
    return NaN;
  } else if (num1 === 0) {
    return 0;
  }

  var abs1 = Math.abs(num1);
  var abs2 = Math.abs(num2);

  while (abs1 >= abs2) {
    abs1 -= abs2;
  }

  var result = abs1;
  if (num1 < 0) {
    result *= -1;
  }

  return result;
}



// console.log(modulo(25,4))

//  0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

function modulo(num1, num2){
	//if num1 is 0 then it's 0
	if(num1 === 0) {
		return 0;
	} else if(num2 === 0) {
		return NaN;
	} else if(num1 === NaN || num1 === NaN) {
		return NaN;
	}
	//elif num2 is 0 then return NaN
	//elif num1 || num2 is NaN then it's NaN

	newNum1 = Math.abs(num1)
	newNum2 = Math.abs(num2)
	while(newNum1 >= newNum2) {
		newNum1 -= newNum2;
	}
	//10-3 = 7
	//7-3 = 4
	//4-3 = 1
	if(num1 < 0) {
		return newNum1 * -1
 	}
 	return newNum1
	//num1 = -1 = result is going to negative
	//loop unti num1 < num2
	//return num1;
}

var outcome = modulo(4, 2)
console.log(outcome)
