var firstName = prompt("what is your name?");
console.log("Hello " + firstName);

var tonightMenu = ['Steak','fruit salad','tofurkey','pork chops'];
var Vegan = tonightMenu.slice(1,3);
var userChoice = prompt("Please select your food: " + tonightMenu);

if (userChoice !== Vegan ) {
  console.log("Vegans beware!")
} else {
  console.log("This cuisine is vegan friendly.")
}
