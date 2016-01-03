//Get command line arguments
var numsToSum = process.argv.slice(2);

//loop through array of strings, convert to nums, and sum
var sumFunc = function(strArr) {
  var sum = 0;
  for (var i = 0; i < strArr.length; i++) {
    sum += Number(strArr[i]);
  };
  return sum;
}

//Output to console
console.log(sumFunc(numsToSum));