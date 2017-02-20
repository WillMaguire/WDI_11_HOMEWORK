console.log('js is running');
var name = prompt('What is your name?');
console.log('Hi ' + name + ", hope you're well");

var mealChoice = prompt("what would you like for dinner? On the menu tonight: Steak, fruit salad, tofurkey, pork chops.");

if ((mealChoice === 'fruit salad') || (mealChoice === 'tofurkey')) {
  console.log('This cuisine is vegan friendly!');
} else {
  console.log('Vegans beware!');
}
