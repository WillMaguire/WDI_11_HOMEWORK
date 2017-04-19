
var menuChoice = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops. What would you like?');

if (menuChoice === 'Steak' || menuChoice ==='pork chops') {
  console.log('Vegans beware!');
} else if (menuChoice ==='fruit salad' || menuChoice ==='tofurkey') {
  console.log('This cuisine is vegan friendly.');
}
