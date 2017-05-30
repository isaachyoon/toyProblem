function powerSet(str){
	if(str === 0) {
		return;
	}
	console.log('before', str);
	powerSet(str-1)
	console.log('after', str)

}

powerSet(5)