// # For this exercise you will need to write two functions: `multiplesOfFourAndSix` and `totalAmountToBeAddedUp`.
// #
// # The `multiplesOfFourAndSix` function should take one input: `maxNum`.
// # This function should return an array of the multiples of 4 and 6 up to the number `maxNum` which is passed into the function. e.g. if maxNum is 25, the return value should be: [4,6,8,12,16,18,20,24]
// #
// # The `totalAmountToBeAddedUp` function should take one input: `arrayOfMultiples`. It will then add up all the numbers in the array and return a total. Display this total in the console.


function multiplesOfFourAndSix(arrayOfMultiples) {
  // fixed the issue
  array = [];
  for (var i = 4; i < arrayOfMultiples; i++) {
    if (i % 4 === 0 || i % 6 === 0) {
      array.push(i)
    }
  }
  return array
}
multiplesOfFourAndSix(25)

// the reduce () method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

var sum = [4,6,8,12,16,18,20,24];
sum.reduce(function(acc, val) {
  return acc + val;
});
