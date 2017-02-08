var current_temp = prompt('Please Enter Current Temperature');
var functional = confirm('Is the air conditioner functional');
var desired_temp = prompt("Please Enter Desired Temperature");

if(current_temp >= desired_temp && functional === true ){
  console.log('Turn on the A/C Please');
};

if(current_temp >= desired_temp && functional === false){
  console.log("Fix the A/C now! It's hot!");
};

if(current_temp <= desired_temp && functional === 'false') {
 console.log("Fix the A/C whenever you have the chance... it's cool...");
};
