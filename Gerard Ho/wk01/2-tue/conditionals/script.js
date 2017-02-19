//drinking age
var promptAge = prompt("What is your age");
var age = Number(promptAge);

if (age<18) {
  console.log("you are under the age of 18");
}else{
  console.log("you are over the age of 18");
}

//Airconditioning
var temperature = 22;
var airconStatus = prompt("Is the A/C functional  YES OR NO");
var userPrompt = prompt("What is the current temperature");

var userTemp = Number(userPrompt);

if(airconStatus==="yes"){
  airconStatus = true;
}else{
  airconStatus = false;
}

if (userTemp>temperature && airconStatus){
  console.log("Turn on the A/C Please");
}else if(userTemp>temperature && !airconStatus){
  console.log("Fix the A/C now! It's hot!");
}else if(userTemp<temperature && !airconStatus){
  console.log("Fix the A/C whenever you have the chance... It's cool...");
}

//Suburb in Melbourne
var userPrompt = prompt("Which suburb do you live in?");
var reply = "Wow you live in "+ userPrompt +", that is a nice place."

console.log(reply);
