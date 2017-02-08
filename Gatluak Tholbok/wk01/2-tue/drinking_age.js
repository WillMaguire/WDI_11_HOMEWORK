var userAge = prompt('Please specify your age');
var drinkingAge = 18;
if (userAge > drinkingAge) {
    console.log('Please drink responsibly');
} else if ( userAge < drinkingAge) {
    console.log('Please grab yourself a soft drink');
} else {
    console.log('Please behave appropriately');
}
