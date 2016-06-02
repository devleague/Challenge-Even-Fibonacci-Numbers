/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {

var sum = 0;
var a = 0;
var b = 1;
var c = 0;

for (var i = 1; i <= maxFibValue; i++) {

  sum = a + b;
  a = b;
  b = sum;

  if (sum % 2 === 0) {

    console.log(c);

    c += sum;

    }

  }

  return c;

}

// bonus round
function _highestFibonacciNumber (maxFibValue){

  var highest = 0;

  //define your base case, validate your input


  //do your work here

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

console.log('line 54 ' + _sumFibs(13));
console.log('line 55 ' + _sumFibs(34));