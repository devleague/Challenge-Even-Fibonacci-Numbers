/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  //Version 1
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

  //Version 2
  // var fib = [0, 1];
  // while (fib[fib.length - 1] <= maxFibValue){
  //   var newFib = fib[fib.length - 1] + fib[fib.length - 2];
  //   fib.push(newFib);
  //   //if the new sequence is even, add to the sum
  //   if (newFib % 2 === 0){
  //     sum += newFib;
  //   }
  // }
  // return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var fib = [0, 1];

  //do your work here
  while (fib[fib.length - 1] <= maxFibValue){
    highest = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(highest);
    if (highest > maxFibValue){
      highest = fib[fib.length - 2];
      return highest;
    }
  }
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};