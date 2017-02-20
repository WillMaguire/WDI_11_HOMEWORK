//1. Drinking age
var currentAge = prompt('what is your current age?');

if (currentAge >= 18) {
  console.log('You are of drinking age');
} else {
  console.log('You are under the drinking age')
}

//2. Air Conditioning
var currentTemperature = prompt('what is the current temperature?')
var desiredTemperature = prompt('what temperature do you wish it was?')
var airconFunctional = prompt('is the air conditioning working? please answer y/n')

if (airconFunctional == 'y' + currentTemperature > desiredTemperature) {
  console.log('Turn on the AC please');
} else if (airconFunctional == 'n' + currentTemperature > desiredTemperature) {
  console.log('Fix the AC now! Its hot!');
} else  {
  console.log('Fix the AC whenever you have the chance...Its cool');
}

//3. Melbourne Suburbs

var userSuburb = prompt('what suburb do you live in?');

if (userSuburb == 'Frankston','Noble Park','Broadmeadows','Moonee Ponds') {
  console.log('You are probably in jail');
} else if (userSuburb == 'St Kilda','Collingwood','St Albans','Dandenong','Cranbourne') {
  console.log('Lock your doors at night');
} else {
  console.log('Have a nice day!');
}
