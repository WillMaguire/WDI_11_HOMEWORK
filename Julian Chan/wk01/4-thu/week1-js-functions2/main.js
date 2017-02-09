// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
var calculateAge = function(birthYear, currentYear) {
  // assume currentYear > birthYear
  var calendarAge = currentYear - birthYear;

  console.log('You are either ' + (calendarAge - 1) + ' or ' + calendarAge);
}

calculateAge(1900, 2000); // should be 99 or 100
calculateAge(1955, 2017); // should be 61 or 62
calculateAge(2018, 2020); // should be 1 or 2

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var lengths = function(stringArray) {
  var stringLength = function(str) {
    return str.length;
  }
  return stringArray.map(stringLength);
}

// should be [6, 2, 4, 2, 7, 6]
console.log(lengths('Hello, my name is Charlie Brown.'.split(' ')));

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
var transmogrifier = function(num1, num2, power) {
  return Math.pow(num1 * num2, power);
}

console.log(transmogrifier(2, 3, 4)); // should return 1296

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
var wordReverse = function(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// should be 'Brown Charlie is name My'
console.log(wordReverse('My name is Charlie Brown'));
