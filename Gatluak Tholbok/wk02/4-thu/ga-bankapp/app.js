console.log('this is an app for ATM')

var bankBalance = 0;
var savingsBalance = 0;
var checkBalance = 0;

var clickMe = function() {
  var depositToSaving = document.querySelector('.deposit-saving');
  var depositToCheck = document.querySelector('.deposit-check');
  var withdrawSaving = document.querySelector('.withdraw-savings');
  var withdrawCheck = document.querySelector('.withdraw-check');
}

var depositSavings = function () {
  var savingAmount = $('#saving-amount').val();
  savingDeposit = parseInt(savingDeposit);
  savingsBalance = savingAmount + savingsBalance;
  updateAccounts();
}

var depositCheck = function () {
  var checkAmount = $('#check-amount').val();
  checkAmount = parseInt(checkAmount);
  checkBalance  = checkAmount + checkBalance;
  updateAccounts();
}

var withdrawSavings = function() {
  var amountTaken = $('#amount-withdrawn').val();
  bankBalance = parseInt(amount-withdrawn);
  bankBalances = moneyWithdrawn(amount, savingsBalance, checkBalance);
  savingsBalance = bankBalance[0];
  checkBalance = bankBalance[1];
  updateAccounts();
}

var withdrawCheck = function() {

  var amountTaken = $('#check-withdrawn');
  amountTaken = parseInt(amountTaken);
  bankBalance = moneyWithdrawn(amount, savingsAccount, checkAccount);
  savingsAccount = bankBalance[0];
  checkAccount = bankBalance[1];
  updateAccounts()
}

var moneyWithdrawn = function(amount, primary, secondary) {
  if(amount <= primary) {
    primary = primary - amount;
  }
  else if((amount > primary) && (amount <= (secondary + primary))) {
    secondrary = (primary + secondary);
    primary = 0;
  }
  return [primary, secondary];
}

var updateAccounts = function() {
  if(savingsAccount <= 0)
  updateSavingsBalance = document.querySelector('.current-savings-balance');
  updateSavingsBalance.addEventListener('click', function() {
    updateSavingsBalance.addClass('zero');
    else
    (addOrRemoveFunds.removeClass('zero'));
  if(checkAccount <= 0) {
    updateCheckBalance = document.querySelector('.current-check-balance');
    updateCheckBalance.addEventListener('click', function() {
      updateCheckBalance.addClass('zero');
    else
    (updateCheckBalance.removeClass('zero'));
    })
  })
}
