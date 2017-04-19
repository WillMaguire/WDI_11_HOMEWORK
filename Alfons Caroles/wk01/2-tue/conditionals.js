var age = prompt("How old are you?");
var userAge = Number(age);

if (userAge >= 18) {
  console.log('Please select your liquor')
} else {
  console.log('Underage should not drink alcohol')
}

var acFunctional = prompt("Is your A/C functional? Y/N");
var currentTemp = prompt("What is the current temperature?");
var desiredTemp = prompt("What is your desired temperature?");

if (acFunctional == 'Y' && currentTemp > desiredTemp) {
  console.log("Turn on the A/C Please")
} else if (acFunctional == 'N' && currentTemp > desiredTemp) {
console.log("Fix the A/C now! It's hot!")
} else if (acFunctional == 'N' && currentTemp < desiredTemp ){
  console.log("Fix the A/C whenever you have the chance...It's cool...")
}

var currentSuburb = prompt('Where do you live?');
console.log(currentSuburb + " is a good place to live");
