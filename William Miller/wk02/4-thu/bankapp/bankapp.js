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

var savingsBalance = document.querySelector('.saving-balance')
var checkingBox = document.querySelector('.checking-box')

//CREATE FUNCTIONS FOR DEPOSIT AND WITHDRAW

var depositSavings = function() {
  savingsAccount += +savingsInput.value;
  savingsBalance.textContent = savingsAccount;
}

var withdrawSavings = function() {
  savingsAccount -= +savingsInput.value;
  savingsBalance.textContent = savingsAccount;
}

var depositChecking = function() {
  checkingAccount = checkingAccount + checkingInput.value;
  return savingsBalance;
}

var withdrawChecking = function() {
  checkingAccount = checkingAccount - checkingInput.value
  return checkingBalance;
}

//ADD EVENT LISTENERS FOR EACH BUTTON

savingsDeposit.addEventListener('click', depositSavings);


savingsWithdraw.addEventListener('click', withdrawSavings);


checkingDeposit.addEventListener('click', depositChecking);


checkingWithdraw.addEventListener('click', withdrawChecking);


// set initial balances

savingsBalance.textContent = savingsAccount;




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
