var name = prompt('What is your name');


var mealChoice = prompt('Hello '+name +', '+'welcome! '+'On the menu tonight: steak, fruit salad, tofurkey, pork chops. What would you like?')

if (mealChoice === 'tofurkey' || mealChoice === 'Tofurkey') {
  alert("This cuisine is vegan friendly.");
} else {
  alert("Vegans beware!");
}
