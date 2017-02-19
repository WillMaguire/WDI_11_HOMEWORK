// iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var count = 0; count <= 20; count++) {
  if (count%2 === 0) {
    console.log(count + " is even");

  } else console.log(count + " is odd");
}


// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").


for (var num = 0; num <=10; num++) {


  for (var num2 = 0; num2 <=10; num2++) {
      console.log(num + ' * ' + num2 + ' = ' + (num * num2);
  }

}


// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

var topChoices = ['green', 'beer', 'movies', 'drugs'];
var choiceNo = 0;
for (var index = 0; index < topChoices.length; index++) {
  choiceNo++
  console.log("My #"+ choiceNo + " choice is " + topChoices[index])
}
