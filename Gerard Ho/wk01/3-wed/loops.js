// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
//
// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
// Your top choices
//
// Create an array to hold your top choices (colors, presidents, whatever).
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
//
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

//The even/odd reporter
console.log("The even/odd reporter");
for(var i=0; i<=20; i++){
  if(i%2===0){
    console.log(i + " is an even number.");
  }else{
    console.log(i + " is an odd number.")
  }
}//CHECKED AND CORRECT

console.log("Multiplication Tables");
for(var num=1; num<=10; num++){
  for(var i=0; i<=10; i++){
    //multiplier = num;
    console.log(i + "*"+ num + "="+ i * num);
  }
}//CHECKED AND CORRECT but you need to concatenate text in the log.

console.log("Your top choices");
var topChoices = ["Navy Blue", "Lamborghini", "Paradise", "Lifestyle", "Health", "Financial Security", "Happiness", "Motivation", "Self Confidence"];
var suffix = ['st', 'nd', 'rd', 'th'];

for(var i=0; i<topChoices.length; i++){
  var comment = "My #"+ (i+1+suffix[i]) + " choice is "+topChoices[i];

  console.log(comment);
}//checked and correct but need to add in the 1st 2nd 3rd suffix notations.
