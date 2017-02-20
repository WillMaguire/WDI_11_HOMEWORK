

//button elements for drinking age
var drinkingAgeSubmit= document.getElementById ('drinking');
drinkingAgeSubmit.addEventListener('click', drinkingAge);

//button elements for Temperature
var tempCheck= document.getElementById ('temp');
tempCheck.addEventListener('click', temp);

//button elements for melbourne suburbs
var melbourne = document.getElementById ('melbSuburbs');
melbourne.addEventListener('click', melbSuburb);

//button elements for melbourne suburbs
var veganMenu = document.getElementById ('veganMenu');
veganMenu.addEventListener('click', vegan);

function drinkingAge() {
var age = prompt("Please enter your age:");

var numConvert = parseInt(age, 10);
var msgOver18;

if (numConvert >= 18) {

   msgOver18 = "you are 18 or over";

} else if (numConvert < 18) {

  msgOver18 = "you are under 18";

}

document.getElementById('ageMessage').innerHTML = msgOver18;

}

function temp() {

var currentTemp = prompt("Enter the current Temperature?");
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
var airCondWorking = confirm("Press OK if the Air Conditioner is working?");
var idealTemp = prompt("What is your ideal room temperature");
var msgTemp;


 var convertCurrentTemp = parseInt(currentTemp, 10);
 var convertIdealTemp = parseInt(idealTemp, 10);
//print out variables to
 console.log(convertCurrentTemp);
 console.log(convertIdealTemp);
 console.log(airCondWorking);

if (airCondWorking === true && convertCurrentTemp > convertIdealTemp) {
    msgTemp = "Turn on the A/C please!";

} else if (airCondWorking === false && convertCurrentTemp > convertIdealTemp) {
    msgTemp = "Please fix the A/C! It's Hot!";

} else if (airCondWorking === false && convertCurrentTemp < convertIdealTemp) {
  msgTemp = "Fix the air conditioner whenever you can";

}

document.getElementById('tempResult').innerHTML = msgTemp;

}

function melbSuburb ()  {

var msgSuburb;
var whatSuburb = prompt("Please enter the suburb you live in");

if (whatSuburb != "") {
  msgSuburb = "Great Suburb!"

} else {
  msgSuburb = "try again"
}
document.getElementById('Melbourne_Results').innerHTML = msgSuburb;
}


function vegan () {

var veganMenu = ['steak', 'fruit salad', 'tofurkey', 'pork chops'];
var userChoice= prompt("Please enter your vegan choice");

for (var i = 0; i < veganMenu.length; i++) {

  if (veganMenu[i] != userChoice) {

    alert("please enter a valid choice");
    break;
  } else if (veganMenu[i] === "steak" || veganMenu[i] === "pork chops") {

    alert('Vegans Beware!');
    break;
  } else {
    alert('This cuisine is vegan friendly');
    break;
  }
}

}
