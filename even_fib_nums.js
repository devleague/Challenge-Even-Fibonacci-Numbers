/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here
  var fib = 0;
  var fibNumbers = [];
  fibNumbers[0] = 0;
  fibNumbers[1] = 1;
  for (var i = 1; fib <= maxFibValue; i++) {
    fib = fibNumbers[i] + fibNumbers[i - 1];
    if(fib <= maxFibValue) {
      //console.log("Fib number:" + fib);
      fibNumbers[i + 1] = fib;
    }
  }
  // calculate the sum of all even Fibonacci numbers
  for(i = 0; i < fibNumbers.length; i++) {
    if(fibNumbers[i] % 2 === 0) {
        //console.log("Adding " + fibNumbers[i]);
        sum+=fibNumbers[i];
        //console.log(sum);
    }
  }
  //console.log(sum);
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  //define your base case, validate your input

  //do your work here
  var fib = 0;
  var fibNumbers = [];
  fibNumbers[0] = 0;
  fibNumbers[1] = 1;
  var prevFib;
  for (var i = 1; fib <= maxFibValue; i++) {
    prevFib = fib;
    fib = fibNumbers[i] + fibNumbers[i - 1];
    if(fib <= maxFibValue) {
      //console.log("Fib number:" + fib);
      fibNumbers[i + 1] = fib;
    }
  }
  highest = prevFib;
  return highest;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};