/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  while (sum <= maxFibValue){
    if(maxFibValue%2 === 0){
      for (//start at end of list); while i > 0; i-3)
        sum += //number at index;
        return sum;//add number at index -3, iterate through array till index = 0
      }
    if (maxFibValue%2 !== 0){
      //go back one index at a time, until you find number that is even
      //then add that number to the sum
    }
    return sum;
  }
  // var sum = 0;
  // if (maxFibValue === 0){
  //   sum = 0;
  //   return sum;
  // }
  // if (maxFibValue === 1){
  //   sum = 0;
  //   return sum;
  // }
  // if (maxFibValue === 2){
  //   sum = 2;
  //   return sum;
  // }
  // while (sum <= maxFibValue){
  //   for (i=0;i ; i++){
  //     if ((index-2)%2 === 0){
  //       sum += index-2;
  //     }
  //     if ((index-1)%2 === 0){
  //       sum += index-1;
  //     }
  //   }
  //   return sum;
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