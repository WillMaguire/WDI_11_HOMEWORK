var AirFunc = prompt('Is your AirCon functional');
var temp = prompt('What is the temperature of your airconditioner in celsius');

if (temp >=75 && AirFunc === 'yes'){
  alert("Turn on the A/C Please");
}
else if (temp >=75 && AirFunc ==='no'){
  alert("Fix the A/C now! It's hot!");
}
else if (temp <=75 && AirFunc ==='no'){
  alert("Fix the A/C whenever you have the chance... It's cool...");
}
else {
  alert('Why are you here?');
};
