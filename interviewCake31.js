

function permutation(str){
	var res = [];
	function permute(string, pre, suf) {
		// console.log(pre)
		if(!suf) {
			res.push(pre)
			return;
		}
		var len = suf.length
		for(var i = 0; i < len; i++) {
			permute(string, pre + suf[0], suf.slice(1))
			var prefix = suf[0]
			var suffix = suf.slice(1)
			suf = suffix + prefix
		}
	}
	permute(str, '', str)
	return res;
}

console.log(permutation('abcde').length)


/*

12
    123       => 312      => 231

  1 23, 1 32,   3 12, 3 21,   2 13, 2 31



	           1234, 4123, 3412, 2341
     1 234,       4, 123,    3 412,    2 341
  1243, 1234



1



*/