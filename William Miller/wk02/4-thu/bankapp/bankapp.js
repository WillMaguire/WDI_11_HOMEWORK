console.log('get rich or die trying');


var checkingAccount = 0;

var savingsAccount = 0;

//create variables for deposit buttons, inputs and boxes
var savingsDeposit = document.querySelector('.savings-deposit-btn');
var savingsWithdraw = document.querySelector('.savings-withdraw-btn');
var checkingDeposit = document.querySelector('.checking-deposit-btn');
var checkingWithdraw = document.querySelector('.checking-withdraw-btn');
var savingsInput = document.querySelector('.savings-input');
var checkingInput = document.querySelector('.checking-input');

var savingsBox = document.querySelector('.savings-box')
var checkingBox = document.querySelector('.checking-box')

//CREATE FUNCTIONS FOR DEPOSIT AND WITHDRAW

var depositSavings = function(savingsInput) {
  savingsAccount = savingsAccount+savingInput
  return savingsBalance;
}

var withdrawSavings = function(savingsInput) {
  savingsAccount = savingsAccount-savingsInput
  return savingsBalance;
}

var depositChecking = function(checkingInput) {
  checkingAccount = savingsAccount+savingInput
  return savingsBalance;

var withdrawChecking = function(checkingInput) {
  checkingAccount = checkingAccount-checkingInput
  return checkingBalance;

//ADD EVENT LISTENERS FOR EACH BUTTON

savingsDeposit.addEventListener('click', function() {

});


savingsWithdraw.addEventListener('click', function() {
var result = withdrawSavings(+savingsInput.value);
  savingsAccount.value = "$"+result;
});


checkingDeposit.addEventListener('click', function() {

});
checkingWithdraw.addEventListener('click', function() {

});







//CHANGE BACKGROUND COLOUR

var changeBackground = function(){
  if (savingsAccount === 0) {
    savingsBox.style.backgroundColor = '#ff0000';
  } else {
    savingsBox.style.backgroundColor = '#bababa';
  } if (checkingAccount === 0) {
    checkingBox.style.backgroundColor = '#ff0000';
  } else {
    checkingBox.style.backgroundColor = '#bababa'
  }
}
