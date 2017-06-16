//CTIC
function stringRotation(str1, str2) {
	var potentialInd = [];
	var firstVar = str2[0]
	for (var i = 0; i < str1.length; i ++){
		if(str1[i] === firstVar) {
			potentialInd.push(i)
		}
	}
	for(var i = 0; i < potentialInd.length; i++) {
		var pre = str1.slice(0, potentialInd[i]);
		var suf = str1.slice(potentialInd[i])
		if(suf+pre === str2) {
			return true;
		}
	}
	return false;
}


function stringRotation2(str1, str2) {
	//str1 has to be a substring of str2+str2
	console.log(str2+str2 + "  " + str1)
	// return isSubstring(str2+str2 , str)
}

console.log(stringRotation2('waterbottle' , 'erbottlewat'))


//waterbottle erbottlewat
//   ^

