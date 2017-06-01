// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.


function modulo(num1, num2) {

  if (num2 === 0 || isNaN(num1) || isNaN(num2)) {return NaN;}

  var divideStr = (num1 / num2).toString();
  if (divideStr.indexOf('.') < 0) {
    return 0;
  }
  var afterDec = divideStr.slice(divideStr.indexOf('.'));


  if (num1 < 0) {
    afterDec = Number(afterDec) * - 1
  }
//     console.log(Number(afterDec) * num2)
    return afterDec * num2;
}

// console.log(modulo(5, -2))



// console.log(output); // -->

/*
I had a question though: so far, we’ve run through two diagnostic problems converting array to object, later on, could we do a live coding session for object to array
*/
// var input = [1, 2];
// function addToFrontOfNew(arr, element) {
//   // your code here
//   var newArray = [];
//   newArray.push(element);
//   return newArray.concat(input);


// return newArray;
// }

// var output = addToFrontOfNew(input, 3);
// // console.log(output)


// function addToFrontOfNew(arr, element) {
//   // your code here

// //   var newArray = [];
// //   newArray.push(element);
// //   return newArray.concat(arr);
//     var newArr = arr.splice(0, 0, element)
//     console.log(arr)

// }

// addToFrontOfNew([1,2], 3)