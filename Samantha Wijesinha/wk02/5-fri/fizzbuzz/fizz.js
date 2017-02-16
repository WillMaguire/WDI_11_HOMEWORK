console.log("fizzbuzz!!");

// Write a JavaScript function cakepudding that logs all numbers from 1 - 100 using for loops.
//
// If a number is divisible by 3 log "Cake" instead of the number.
// If a number is divisible by 5 log "Pudding" instead of the number.
// If a number is divisible by 3 and 5 log "CakePudding" instead of the number.
// // Modulo Operator In computing, the modulo operation finds the remainder after
// division of one number by another. For checking for divisibility, its a handy operator if check the output for 0.
//
// console.log(5 % 2) - Will equal 3
//
// console.log(10 % 2) - Will equal 0
//
// Steps:
//
// setup a loop to print out numbers from 1 to 100
// figure out how to use modulo operator to check for divisibility
// print out Cake for numbers by 3
// print out Pudding for numbers by 5


for (var i = 1; i <= 100; i++) {

  if (i%3 === 0 ) {
      console.log("cake");

  } else if (i%5 === 0) {
    console.log("pudding");

  } else if (i%3 === 0 && i%5 === 0) {
      console.log("cakepudding");
  }
  console.log(i);
}
