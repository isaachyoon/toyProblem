function Node(data) {
	this.data = data;
	this.children = {};
	this.isWord = false;

}

function trie() {
	this.root = new Node('')
}


//what is the point of this function?!?
trie.prototype.add = function(word) {
	if(!this.root) {
		return null;
	}
	this.addNode(this.root, word)
}

trie.prototype.addNode = function(node, word) {
	if(!node || !word) {
		return null;
	}
	var letter = word.charAt(0);
	//this is where you can allow (cars and cots to exist)
	var child = node.children[letter]
	if(!child) {
		child = new Node(letter)
		//if object doesn't exist, you create child
		node.children[letter] = child
	}

	var remainder = word.substring(1);
	if(!remainder) {
		child.isWord = true;
	}
	this.addNode(child, remainder)
}

trie.prototype.contains = function(word) {
	if(!this.root) {
		return false;
	}
	if(!word) {
		return false;
	}
	return this.containsWord(this.root, word)
}

trie.prototype.containsWord = function(node, word) {

	var letter = word.charAt(0)
	var child = node.children[letter]
	if(!word) {
		return true
	}
	if(!child) {
		return false;
	}
	var remainder = word.substring(1)
	return this.containsWord(child, remainder)
}

var newTrie = new trie();
newTrie.add('cards');
newTrie.add('cots')
console.log(newTrie.contains('car'))

console.log(newTrie)

