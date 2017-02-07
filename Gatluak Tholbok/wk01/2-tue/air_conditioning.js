var user = prompt('What is the current temperature in your house?');
var desiredTemp = 25;

if (user > 25) {
  console.log("Turn on the A/C please");
} else if (user > 30) {
  console.log("Fix the A/C now! It's hot!");
} else if (user < 25) {
  console.log("Fix the A/C whenever you have the chance... It's cool...");
} else {
  console.log("Air conditioner is fine");
}
