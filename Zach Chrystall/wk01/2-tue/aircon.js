console.log('JS is up and running');

var currentTemp = prompt('What is the current temperature?');
var acStatus = prompt("Is the airconditioning running? please answer y or n")
var requestedTemp = prompt("What temperature would be juuuust right?")

if ((acStatus === 'y') && (parseInt(currentTemp) > parseInt(requestedTemp))) {
  console.log("Turn on the A/C please");
} else if ((acStatus === 'n') && (parseInt(currentTemp) > parseInt(requestedTemp))) {
  console.log("Fix the A/C now, it's hot!");
} else if ((acStatus === 'n') && (parseInt(currentTemp) < parseInt(requestedTemp))) {
  console.log("Fix the A/C whenever you have the chance... It's cool...");
}
