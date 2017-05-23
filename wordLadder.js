
function ladderLength(beginWord, endWord, wordList, length = 1){
	if(beginWord === endWord) {
		return length;
	} else {
		var transform = checkDifference(beginWord, wordList, endWord);
	}
	if(transform === - 1){
		return false;
	} else {
		length++;
		// return ladderLength(transform, endWord, wordList, length)
	}
}


function checkDifference(begin, wordList, end) {
	if(wordList.indexOf(end) !== -1) {
		console.log(wordList)
		return;
	}
	var list = [];
	for (var i = 0; i <wordList.length; i ++ ){
		var error = 0;
		for (var j = 0; j < wordList[i].length; j++){
			if(begin[j] !== wordList[i][j]) {
				error++;
			}
		}
		if(error === 1) {
			list.push([begin, wordList[i]])
			wordList.splice(i, 1)
		} else {
			error = 0;
		}
	}
	for(var i = 0; i < list.length; i ++) {
		checkDifference(list[i][list[i].length-1], wordList)
	}
	console.log(list)
}

function call(){

	var wordList = ["hot","dot","dog","lot","log","cog"]
	var wordList2 = ['cat', 'bat', 'cot', 'cog', 'cow', 'rat', 'but', 'cut', 'dog', 'web']
	var beginWord = 'hit';
	var beginWord2 = 'cat';
	var endWord = 'cog';
	var endWord2 = 'dog'
	console.log(ladderLength(beginWord2, endWord2, wordList2))
}

call()


