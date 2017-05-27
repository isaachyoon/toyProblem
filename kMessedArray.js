// function sortKMessedArray(arr, k) {
// 	var prev = Number.negative_infinity;
// 	//iterate through the array
// 	for(var i = 0; i < arr.length; i++) {
// 		//if the prev num is greater, then the number is out of place
// 		if(arr[i] < prev) {
// 			//splice that number at i
// 			var splice = arr.splice(i, 1)
// 			//let's go back 3 steps,
// 			for(var j = i-k; j < i; j ++) {
// 				//if the spliced numer is less than i at a place
// 				if(splice<arr[j]) {
// 					//then splice it in, and break out of the loop
// 					arr.splice(j, 0, splice[0])
// 					break;
// 				}
// 			}
// 			//reset the previous
// 		} else {
// 			prev = arr[i]
// 		}
// 	}
// 	return arr;
// }

// var arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
// var k = 2;

// var output = sortKMessedArray(arr,k)
// console.log(output)

// //using HEAP

// function sortKMessedArray(arr, k) {
// 	//create a new heap

// 	//for i from 0 to k:
// 		//push in the first k num

// 	//extract the top and set it equal to the first element
// 	//for i from arr[i-(k+1)] = h.extranMin();

// 	//insert the next val
// 	//h.insert(arr[i])

// 	//extract the rest
// 	//for i from 0 to k
// 		//arr[n-k-1 + 1] = h.extractMin();

// 	//return arr;
// }

// function heap(val) {
// 	this.val = val;
// 	this.left = null;
// 	this.right = null;
// }

// heap.prototype.insert =  (val) => {
// 	console.log(val)
// 	console.log(this.val)
// 	if(!this.left && val > this.val) {
// 		this.left = new heap(val);
// 	} else if(!this.right && val > this.val) {
// 		this.right = new heap(val)
// 	}
// }

// var HEAP = new heap(1);
// HEAP.insert(2);

// console.log(HEAP)


// /*
// keep tracker = 2
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10  ]

// 	 1
// 	/ \
//  4   5

// 		2
// 	 / \
// 	4   5
// still good so push in 2


// */




function sortKMessedArray(arr, k) {
  var currentElement;
  var currentElementFromEnd;
  var len = arr.length;
  for (var i = 0, j = len - 1; i < len / 2; i++, j--) {
    console.log(arr);
    currentElementFromStart = arr[i];
    currentElementFromEnd = arr[j];
    if (currentElementFromStart > arr[i+k]) {
      arr[i] = arr[i+k];
      arr[i+k] = currentElementFromStart;
    }

    if (currentElementFromEnd < arr[j-k]) {
      arr[j] = arr[j-k];
      arr[j-k] = currentElementFromStart;
    }
  }
  return arr;
}

