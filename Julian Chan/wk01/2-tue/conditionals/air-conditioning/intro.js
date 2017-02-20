var curTemp = Number(prompt('What\'s the temperature?'));
var isACOn = prompt('Is the A/C on? (yes/no)').toLowerCase();
var targetTemp = Number(prompt('How cold do you want it to be?'));

if (isACOn === 'yes' && curTemp > targetTemp) {
  console.log('Turn on the A/C please');
} else if (isACOn === 'no'){
  if (curTemp > targetTemp) {
    console.log('Fix the A/C now! It\'s hot!');
  } else if (curTemp < targetTemp) {
    console.log('Fix the A/C whenever you have the chance... It\'s cool...');
  }
}
