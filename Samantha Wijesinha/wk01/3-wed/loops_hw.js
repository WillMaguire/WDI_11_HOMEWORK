console.log("loops_hw connected!!");

// iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 1; i < 21; i++) {
  if (i%2 === 0) {
    console.log(i + " is even");

  } else console.log(i + " is odd");
}

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (var i = 1; i < 11; i++) {
  var result= i * 9;
  console.log(i + " * 9 = " + result);

}

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

var topChoices = ['green', 'beer', 'movies', 'drugs'];
var choiceNo = 0;
for (var i = 0; i < topChoices.length; i++) {
  choiceNo++
  console.log("My #"+ choiceNo + " choice is " + topChoices[i])
}

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(var i = 1; i < 11; i++) {
  var result= i * 9;
  console.log(i + " * 9 = " + result);

    for(var p = 1; p < 11; p++){
        var multiplyResult = p*result;
        console.log("result times: " + p + " * " + result +" = " + multiplyResult);

    }
}
