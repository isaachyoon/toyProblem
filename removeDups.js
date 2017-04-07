//write code to remove duplicates from an unsorted linked list
	//how would you solve this problem if a temporary buffer is not allowed?

// const removeDups = (node) => {
// 	const resultObj = {};
// 	let head = node;
// 	resultObj[node.val] = true;
// 	while(node.next) {
// 		if(resultObj[node.next.val]) {
// 			node.next = node.next.next;
// 		} else {
// 			resultObj[node.next.val]
// 		}
// 		node = node.next;
// 	}
// 	return head;
// }

const removeDups = (node) => {
	let pointer = node;
	while(node !== null) {
		console.log(node.value)
		node = node.next
	}
}

function Node(val) {
	this.val = val;
	this.next = null;
}


const ll = new Node(3);
ll.next = new Node(5);
ll.next.next = new Node(3);
ll.next.next.next = new Node(7);
ll.next.next.next.next = new Node(4);


const result = removeDups(ll)


var arr = [1,2,3,4];
console.log(arr.pop());
console.log(arr);


