/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  debugger;
  // do your work here
  var previous = 0;
  var current = 1;
  var lastNum = 1;
  while (lastNum <= maxFibValue){
    if (current % 2 === 0){
      sum +=current;
    }
    lastNum = previous + current;
    previous = current;
    current = lastNum;
  }
  return sum;

  // //Version 1
  // var fib = [0, 1];
  // while (sum <= maxFibValue){
  //   var newFib = fib[fib.length - 1] + fib[fib.length - 2];
  //   fib.push(newFib);
  //   //if the new sequence is even, add to the sum
  //   if (newFib % 2 === 0){
  //     sum += newFib;
  //   }
  //   //if sum is equal to maxFibValue, the loop should end
  //   if (sum === maxFibValue){
  //     break;
  //   }
  //   //if the new sequence is equal to the maxFibValue, stop the loop; any additional even sequences will increase the sum, which should not exceed value of maxFibValue
  //   if (newFib === maxFibValue){
  //     break;
  //   }
  //   //if the new sequence is greater than the the maxFibValue and a new even sequence is added to sum that exceed value of maxFibValue, subtract that value from the sum, and stop the loop
  //   if (newFib > maxFibValue && sum > maxFibValue){
  //     sum -= newFib;
  //     break;
  //   }
  // }
  // return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};