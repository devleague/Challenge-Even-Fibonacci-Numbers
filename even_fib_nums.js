/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var evenSum = 0;
  var prevNum = 0;
  var currNum = 1;
  // var nextNum = 1;
  while (sum <= maxFibValue) {
    sum = prevNum + currNum;
    prevNum = currNum;
    currNum = sum;
    if (sum % 2 === 0) {
      evenSum += sum;
      // console.log(evenSum);
    }
  }
  // do your work here
    // for(var i = 1; sum <= maxFibValue; i++) {
    //   fibArray.push(sum);
    //   sum += fibArray[i - 1];

    //   console.log(sum, fibArray);
    //   if (fibArray[i] % 2 === 0) {
    //     evenSum += fibArray[i];
    //     console.log(evenSum);
    //   }
    // }
  return evenSum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  // var highest = 0;
  var sum = 0;
  var prevNum = 0;
  var currNum = 1;
  // var nextNum = 1;
  while (sum < maxFibValue) {
    sum = prevNum + currNum;
    prevNum = currNum;
    currNum = sum;
  }
  //define your base case, validate your input


  //do your work here

  return prevNum;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};