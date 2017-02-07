
// Lab: Grabbing input form user in the broswer

var name= prompt("Please enter your name ");
console.log("Welcome, " + name + "!!");

var menu= ["Fruit Salad", "Tofurkey", "Pork Chops"];
var dinner= prompt ("What would you like for dinner tonite??\n " + menu);


// Part 2 - The Vegan Test

if(dinner === menu[1]){
  console.log("This cuisine is vegan friendly.")
}else if(dinner !== menu[1] && dinner === menu[0,2]){
  console.log ("Vegan beware!!")
}else{
  console.log ("Sorry, it's not in menu")
}

// conditionals

// 1. Drinking age

var age= prompt("Please enter your age");
var ageInNum= Number(age);

if(ageInNum < 18){
  console.log("You are underage");
}else{
  console.log("You are allowed to drink");
}

// 2. Air Conditioning

var acFunctional= prompt("Is it Air Conditioning functional(y/n)");

var currentTemp= prompt("Please enter current Temperature");
var desiredTemp= 18;

if(acFunctional === 'y'){
  if(currentTemp > desiredTemp){
    console.log("Turn on the Air Conditioning Please");
  }
}
else if(currentTemp > desiredTemp){
    console.log("Fix the Air Conditioning now! It's hot!");
}
else if(currentTemp < desiredTemp){
  console.log("Fix the Air Conditioning whenever you have the chance... It's cool...")
}

// Melbourne Suburbs

var suburbs= prompt("What Suburb you live in ");
var iLiveIn= "Glen Huntly";

if(suburbs === iLiveIn){
  console.log("Great, we live in same suburb");
}else{
  console.log("Sad we dont live in same area");
}
