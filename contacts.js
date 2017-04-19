// var contacts = function(){
// 	this.result = [];
// }

// contacts.prototype.add = function(val){
// 	this.result.push(val);
// }

// contacts.prototype.find = function(str){

// }

// var cont = new contacts();
// contacts.
// console.log(cont)



// var result = [];
// var contacts = function(input) {
// 	let resultCount = 0;

// 	var inp = input.split(' ');
// 	if(inp[0] === 'add') {
// 		add(inp[1])
// 	} else if(inp[0] === 'find') {
// 		find(inp[1])
// 	}
// 	function add(input) {
// 		result.push(input);
// 	}
// 	function find(input){
// 		for(var i = 0; i < result.length; i ++) {
// 			if(result[i].includes(input)) {
// 				resultCount++;
// 			}
// 		}
// 		console.log(resultCount)
// 		return resultCount;
// 	}
// }



// contacts('add hack');
// contacts('add hackerrank')
// contacts('find hack')
// contacts('find hak')

function find(trie, str) {
    str = str.split('');
    //['h', 'a', 'c', 'k']
    var node = trie[str[0]];
    //node = {count: 1, a: [object]}
    console.log('node' , node)
    //node = f

    if(!node) {
        return 0;
    }
    var count = (str.length === 1) ? node._cnt : 0;
    console.log(count);
    for(var i = 1; i < str.length; i++) {
        console.log(node)
        node = node[str[i]];
        if(!node) {
           break;
        }
        if(i === str.length - 1) {
            count = node._cnt;
        }
    }
    return count;
}

function addToTrie(trie, str) {
    str = str.split('');
    //[h,a,c,k]

    //if(h doesn't exist, then create the object with value of {count: 0})
    if(!trie[str[0]]) {
        trie[str[0]] = {_cnt: 0};
    }
    var node = trie[str[0]];
    //same as trie[str[0]].count
    node._cnt++;
    for(var i = 1; i < str.length; i++) {
    	//if(node[st[r[i]] already has a value, and good. Otherwise, create it with {count:0})
        node[str[i]] = node[str[i]] || {_cnt: 0};
      //increment when found
        node[str[i]]._cnt++;
        //keep the node at the current node so that it could add to its current object
        node = node[str[i]];
    }

    return trie;
}

var obj = addToTrie({}, 'hack')
console.log(obj)
console.log(find(obj, 'hack'))
// addToTrie({}, 'hackerank')