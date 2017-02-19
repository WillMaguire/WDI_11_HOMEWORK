/*Conditionals Task 1*/

var userAge = prompt('What is your age?');

if (userAge < 18) {
  console.log('No drinking for you!');
} else if (userAge >= 18) {
  console.log('Please spend your money on alcohol!');
}

/*Conditionals Task 2*/

var currentTemp = prompt ('What is the current tempreature in degrees celcius?');

var acFunc = prompt ('Is the air conditioner functional? yes or no?');

var desiredTemp = prompt ('What temprerature do you want in degrees celcius?');

if (acFunc === 'no' && currentTemp > desiredTemp){
  console.log('Fix AC Now!');
} else if (acFunc === 'yes' && currentTemp > desiredTemp) {
  console.log('Turn on AC Please');
} else if (acFunc === 'no' && currentTemp < desiredTemp) {
  console.log('Fix the AC whenever you have the chance... It is cool...');
};

/*Conditionals Task 3*/

var userSuburb = prompt ('What suburb do you live in?')

if (userSuburb === 'Northcote' || 'Collingwood' || 'Fitzroy'){
  console.log('Do you like beard with your coffee?');
} else if (userSuburb === 'South Yarra' || 'St Kilda' || 'Windsor') {
  console.log('Fake tan in your green smoothie?')
};
