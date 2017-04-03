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
	let head = node;
	let pointer = node;
	node = node.next;
	while(head!== null) {
		while(node.next!== null) {
			if(head.value === node.value) {

			}
			console.log('node', node.val)
			node = node.next;
		}
		node = pointer
		console.log('head', head.val)
		head = head.next;

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
console.log(result)