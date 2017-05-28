


var perfectSquares = function(n, resArr = {}) {
  if(n === 0) {
    return resArr;
  } else if(n % 2 === 0 && n > 4) {
    n -= 4
    resArr[4] = resArr[4] + 1 || 1
    return perfectSquares(n, resArr)
  } else {
    var square = Math.floor(Math.sqrt(n))
    resArr[square * square] = resArr[square * square] + 1|| 1
    n -= Math.pow(square,2)
    return perfectSquares(n, resArr)
  }
}

function numSquares(n){
  var result = 0;
  console.log('hello', n)
  var resObj = perfectSquares(n)


  if(n === 1) {
    return 1;
  } else if(Math.sqrt(n) % 2 === 0) {
    return 1;
  }

  for(var key in resObj) {
    if(Math.sqrt(resObj[key]) % 2 === 0){
      result += resObj[key] / 2
    } else {
      result += resObj[key]
    }
  }
  console.log(resObj)
  return result
}

console.log(numSquares(10))

