//InterviewCake21.js

/*
Each breakfast delivery is assigned a unique ID, a positive integer. When one of the
company's 100 drones takes off with a delivery, the delivery's ID is added to an array,
delivery_id_confirmations. When the drone comes back and lands, the ID is again
added to the same array.
After breakfast this morning there were only 99 drones on the tarmac. One of the
drones never made it back from a delivery. We suspect a secret agent from Amazon
placed an order and stole one of our patented drones. To track them down, we
need to find their delivery ID.
Given the array of IDs, which contains many duplicate integers and one unique
integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were
received, and some deliveries get cancelled before takeoff.

ex.
deliveryID: 3

delivery_id_confirmations
[     3     ,             3        ]
 deliveryID   comes back and lands
 takes off


//the idea is that because the fly and land, there should always be a even number of numbers.

approach 1: create a object where I keep number of stored value.
//iterate and return the value that is odd
*/

function findDrone(arr){
	var obj = {};
	for(var i = 0; i < arr.length; i ++) {
	 obj[arr[i]] = (!obj[arr[i]]) ? 1 : obj[arr[i]] + 1
	}
	for(var key in obj){
		if(obj[key] % 2 !== 0) {
			return key;
		}
	}
	return 'all present'
}


var output = findDrone([1, 2, 1])
console.log(output)
