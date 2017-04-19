console.log("(js connected)");

var currentTemp = prompt("what is the current temperature?");
var workingAC = confirm("Is the A/C working?");
var desiredTemp = prompt("What temperature would you like to have?");

if ( (workingAC) && (currentTemp > desiredTemp) ) {
  document.getElementById('response').innerHTML = "Turn on the AC please";
} else if ( (workingAC !== true ) && (currentTemp > desiredTemp) ) {
  document.getElementById('response').innerHTML = "Fix the A/C now! It's hot!";
} else if ( (workingAC !== true ) && (currentTemp < desiredTemp) ) {
  document.getElementById('response').innerHTML = "Fix the A/C whenever you have the chance... It's cool...";
}
