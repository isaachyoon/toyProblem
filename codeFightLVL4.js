
/*function alternatingSums(a) {
	var firstNum = 0;
	var secondNum = 0;
	var resultArr = [];
	for(var i = 0; i < a.length; i++){
		firstNum += a[i]
		i++
	}
	for(var i = 1; i < a.length; i++) {
		secondNum += a[i]
		i++
	}
	resultArr.push(firstNum)
	resultArr.push(secondNum)
	return resultArr;
}
*/
function alternatingSums(a) {
	var firstNum= true;
	var resultArr = [0,0];

	for (var i = 0; i < a.length; i ++) {
		if(firstNum) {
			resultArr[0] += a[i];
		} else {
			resultArr[1] += a[i];
		}
		firstNum = !firstNum
	}
	return resultArr;
}

var result = alternatingSums( [50, 60, 60, 45, 70])
// console.log(result)

//Alternative Solution
// alternatingSums = a => a.reduce((p,v,i) => (p[i&1]+=v,p), [0,0])

function addBorder(picture) {
	var stringLength = picture[0].length;
	var border = '*'.repeat(stringLength + 2);

	for(var i = 0; i < picture.length; i ++) {
		picture[i]= picture[i].split("")
		picture[i].splice(0,0, '*')
		picture[i].splice(picture[i].length, 0, '*')
		picture[i] = picture[i].join('')
	}
	picture.splice(0,0, border);
	picture.push(border);
	return picture
}

picture = ["abc",
           "ded"];
console.log(addBorder(picture));

function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}

function areSimilar(A, B) {
	for(var i =0 ; i < A.length; i ++) {
		for (var j = 0 ; j< B.length; j++) {
			if(A[i] === B[j]){
				A.splice(i,1);
				i--;
				B.splice(j,1);
				j--
			}
		}
	}
	if(A.length && B.length > 0) {
		return false;
	}
	return true;
}
A = [1, 2, 3]
B = [2, 1, 1]
console.log(areSimilar(A,B))
