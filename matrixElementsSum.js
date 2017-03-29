function matrixElementsSum(matrix) {
	var storage = {};
	var result = 0;
	for(var i = 0; i < matrix.length; i ++){
		for (var j = 0; j < matrix[i].length; j++ ){
			if(matrix[i][j] === 0) {
				storage[j] = 0;
			}
			if(storage[j] === 0) {
				matrix[i][j] = 0;
			}
			result += matrix[i][j];
		}
	}
	return result;
}

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]

// console.log(matrixElementsSum(matrix))

function allLongestStrings(inputArray) {
	var longest = 0;
	var result = [];
	for (var i =0 ; i < inputArray.length; i++) {
		if(inputArray[i].length > longest) {
			longest = inputArray[i].length;
		}
	}
	console.log('longest', longest)
	for (var i = 0; i < inputArray.length; i ++){
		if(inputArray[i].length === longest) {
			result.push(inputArray[i])
		}
	}
	return result;
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

function allLongestStrings2(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    console.log('maxSize', maxSize)
    return inputArray.filter(x => x.length === maxSize);
}
// console.log(allLongestStrings2(["aba", "aa", "ad", "vcd", "aba"]))



function commonCharacterCount(s1, s2) {
	var count = 0;
	for (var i = 0; i <s1.length; i++) {
		for (var j =0 ; j<s2.length; j++) {
			if(s1[i] === s2[j]){
				count++;
				s2 = s2.split('');
				s2.splice(j,1);
				s2= s2.join('')
				break;
			}
		}
	}
	return count;
}
var s1, s2;
s1 = "aabcc";
s2 = "adcaa";
// console.log(commonCharacterCount(s1, s2))

function isLucky(n) {
	t = n.toString().split('')
	n = t.splice(0, t.length/2)
	n2 = t.splice(t.length/2 -1);
	return n.reduce((x,y) => parseInt(x)+parseInt(y)) === n2.reduce((x,y) => parseInt(x)+parseInt(y))
}

isLucky(1230)
isLucky(239017)


function sortByHeight(a) {
	var negative = [];
	for(var i = 0 ; i < a.length; i ++) {
		if(a[i] === -1) {
			negative.push(i);
		}
	}
	for (var i = 0; i < a.length; i ++) {
		if(a[i] === -1) {
			a.splice(i, 1)
			i--
		}
	}
	a = a.sort((x,y) => x-y)
	for(var i = 0; i < negative.length; i++) {
		a.splice(negative[i], 0,  -1 )
	}
	// console.log(a)
	// console.log(negative)
	return a;
}

function sortByHeight2(a) {
    var s = a.filter(h => h > 0).sort((a, b) => a - b)
    // console.log(s)
    return a.map(p => {
        if (p !== -1) {
            return s.shift();
        }

        return -1;
    })
}


sortByHeight2([-1, 150, 190, 170, -1, -1, 160, 180])

function reverseParentheses(s) {
	function reverseOnce(s){
    var regexp = /\(([^()]*)\)/i;
    var subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
  }
	 if (s.includes('(')){
        return reverseParentheses(reverseOnce(s));
    } else {
        return s;
    }


}

console.log(reverseParentheses("a(bc)de"))
