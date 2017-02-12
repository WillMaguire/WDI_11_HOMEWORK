// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
var calculateAge = function() {
    var currentYear = new Date().getFullYear();
    for (i = 0;i < 3; i++) {
    var birthYear = prompt('Please input your birth year (YYYY)');
    var floorAge = currentYear - birthYear;
    var ceilingAge = currentYear - birthYear + 1;
    console.log("You are either " + floorAge + " or " + ceilingAge);
  }
}

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var lengths = function() {
  var words = [];
  var wordsLength = [];

  for (i = 0;i < 3;i++) {
    words.push(prompt('Please input words'));
  }

  for (i = 0; i < words.length; i++) {
    var individualWords = words.slice(',')[i];
    var individualWordsLength = individualWords.slice('');
    var length = individualWordsLength.length;
        wordsLength.push(length);
  }
  return wordsLength;
}

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

var transmogrifier = function() {
  var number1 = Number(prompt("Please enter the first number"));
  var number2 = Number(prompt("Please enter the second number"));
  var number3 = Number(prompt("Please enter the third number"));

  return Math.pow(number1 * number2, number3);
}

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var wordReverse = function() {
  var wordsToBeReversed = prompt("Please enter a word you want to be reversed");
  var reversedWord = wordsToBeReversed.split('').reverse().join('');
  return reversedWord;
}
