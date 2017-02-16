console.log("welome to the bak of GA");

var checkingBalance=0;
var savingsBalance=0;


//savings deposit button
var depositSavingsBtn = document.querySelector('.saving-deposit-btn');

//savings withdrawal button
var withdrawSavingsBtn = document.querySelector('.saving-withdraw-btn');

//checking desposit button
var depositCheckingBtn = document.querySelector('.checking-deposit-btn');

//checking withdrawal button
var withdrawCheckingBtn = document.querySelector('.checking-withdraw-btn');

//enter amount to withdraw or deposit in checking account
var checkingAmountInput = document.querySelector('.enterAmount-checking');

//enter amount to withdraw or deposit in savings account
var savingsAmountInput = document.querySelector('.enterAmount-saving');

var displayResultSavingsOutput = document.querySelector('.balance-savings');

var displayResultCheckingOutput = document.querySelector('.balance-checking');

//deposits to Savings
var addToSavings = function(savingsAmountInput) {
  savingsBalance = savingsBalance+savingsAmountInput
  return savingsBalance;
}

depositSavingsBtn.addEventListener('click', function() {
var result = addToSavings(+savingsAmountInput.value);
  //update ui
  displayResultSavingsOutput.value = "$"+result;
});

//withdraw from savings

//check if there is money in the savings account, if no money, check if there is money in the checking account
var withdrawFromSavings = function(savingsAmountInput) {
  savingsBalance = savingsBalance-savingsAmountInput
  return savingsBalance;
}

withdrawSavingsBtn.addEventListener('click', function() {
var result = withdrawFromSavings(+savingsAmountInput.value);
  //update ui
  displayResultSavingsOutput.value = "$"+result;
});



//deposits to checking
var addToChecking = function(checkingAmountInput) {
  checkingBalance = checkingBalance+checkingAmountInput
  return checkingBalance;
}

depositCheckingBtn.addEventListener('click', function() {
var result = addToChecking(+checkingAmountInput.value);
  //update ui
  displayResultCheckingOutput.value = "$"+result;
});


//withdraw from checking
var withdrawFromChecking = function(checkingAmountInput) {

  checkingBalance = checkingBalance-checkingAmountInput
  return checkingBalance;
}

withdrawCheckingBtn.addEventListener('click', function() {

  if ((checkingBalance - +checkingAmountInput.value) <0 &&  (savingsBalance - +checkingAmountInput.value) <0){
    displayResultCheckingOutput.value = "$--";
    document.querySelector('.message').innerHTML = "Not enough funds!"

  } else if (checkingBalance >= +checkingAmountInput.value){
    var result = withdrawFromChecking(+checkingAmountInput.value);
  } else if (savingsBalance >= +checkingAmountInput.value) {
    withdrawFromSavings(+checkingAmountInput.value)
  }

  //update ui
  displayResultCheckingOutput.value = "$"+result;
});





//check account
var enoughFundsChecking = function(checkingAmountInput, savingsAmountInput, savingsBalance, checkingBalance){

}

var enoughFundsSaving = function(checkingAmountInput, savingsAmountInput) {

}
