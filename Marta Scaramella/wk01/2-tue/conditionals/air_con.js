var currTemp = prompt('What is the current temperature?');
var acFunct = prompt('Is it the A/C functional?');
var prefTemp = prompt('What is the preferred temperature?');

if (acFunct === 'yes' && currTemp > prefTemp) {
  console.log("Turn on the A/C Please");
}

else if (acFunct === 'no' && currTemp > prefTemp) {
  console.log("Fix the A/C now! It's hot!");
}

else if (acFunct === 'no' && currTemp < prefTemp) {
  console.log("Fix the A/C whenever you have the chance... It's cool...");

}
