var name = prompt('What is your name?');
console.log('Hello ' + name +'!');

var menu = ['steak', 'fruit salad', 'tofurkey', 'pork chops'];
var choice = prompt('What would you like to eat?').toLowerCase();

if (menu.indexOf(choice) < 0) {
  console.log('That is not part of the menu.');
} else if (choice === 'fruit salad' || choice === 'tofurkey') {
  console.log('This cuisine is vegan friendly.');
} else {
  console.log('Vegans beware!');
}
