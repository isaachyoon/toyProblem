function Node(val){
	this.val = val;
	this.prev = null;
	this.next = null;
}

function lruCache(){
	this.count = 0;
	this.hashMap = {};
	this.head = null;
	this.tail = null;

}

lruCache.prototype.set = function(item , val) {
	if(this.count > 3) {
		var temp = this.tail
		this.tail = this.tail.prev;
		delete temp;
		this.count--;
	}
	if(!this.hashMap[item]) {
		this.hashMap[item] = new Node(val);
		var temp = this.head
		this.head = this.hashMap[item];
		this.hashMap[item].next = temp;
		this.tail = temp
		if(temp !== null) {
			temp.prev = this.hashMap[item]
		}
		this.count++;
		// this.hashMap[item].prev =
	}
	//it exists somewhere in the hash
	else {
		this.hashMap[item].prev.next = this.hashMap[item].next;
		this.hashMap[item].next.prev = this.hashMap[item].prev
		delete this.hashMap[item]
		this.set(item, val)
	}
	// console.log(this)

}


var LRU = new lruCache();
LRU.set('item1', 1)
LRU.set('item2', 2)
LRU.set('item3', 3)
LRU.set('item4', 4)
LRU.set('item2', 2)




console.log(LRU)
// item3 -> item2 -> item1