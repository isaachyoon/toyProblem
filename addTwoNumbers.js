var addTwoNumbers = function(l1, l2) {
	var flag = false;
	var temp = 0;
	var resultNode = new ListNode(l1.val + l2.val);
	var head, tail, val;
	l1 = l1.next;
	l2 = l2.next;
	tail = head = resultNode;
	while(l1 !== null) {
		if((l1.val + l2.val) >= 10 ) {
			val = l1.val + l2.val - 10
			// temp = 1;
			flag= true;
		} else {
			val = l1.val + l2.val
		}

		head.next = new ListNode((val) +  temp);
		l1 = l1.next;
		l2 = l2.next;
		head = head.next;
		temp = 0;
		temp = 1 ? flag === true : 0
		// console.log(tail)
	}
	return tail;
}

function ListNode(val) {
	this.val = val;
	this.next = null;
 }

 var newNode = new ListNode(2);
 var newNode2 = new ListNode(4)
 var newNode3 = new ListNode(3)
 newNode.next = newNode2;
 newNode2.next = newNode3;

 var l2 = new ListNode(5);
 var l22 = new ListNode(6);
 var l23 = new ListNode(4);
 l2.next = l22;
 l22.next = l23





var node = addTwoNumbers(newNode, l2)
console.log(node);