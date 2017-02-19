console.log("ripping people off since 1958");

var checkingAccount = [
{
accountName: "Checking",
accountBalance: 0.00
}]

var savingAccount = [
{
accountName: "Saving",
accountBalance: 0.00
}]

var depositSavingsBtn = document.querySelector('.saving-deposit-btn');
var withdrawSavingsBtn = document.querySelector('.saving-withdraw-btn');
var depositCheckingBtn = document.querySelector('.checking-deposit-btn');
var withdrawCheckingBtn = document.querySelector('.checking-withdraw-btn');
var checkingAmountInput = document.querySelector('.enterAmount-checking');
var savingsAmountInput = document.querySelector('.enterAmount-saving');
var displayResultSavingsOutput = document.querySelector('.balance-savings');
var displayResultCheckingOutput = document.querySelector('.balance-checking');
var displayMessage = document.querySelector('.message');

  var validateTheInput = function(amount) {
  if (isNaN(amount) || amount === undefined) {
    displayMessage.textContent = "Please enter a valid Number";
    var validatedNumber = 0;

    } else if (amount < 0){
      var validatedNumber = 0;
      displayMessage.textContent = "Please enter a valid Number";

      } else {
        var validatedNumber = amount;
      }
   return validatedNumber;
  }

  var validateAndUpdateOutput = function(amount, account) {
    if (amount > 0 && account === checkingAccount[0].accountName) {
        var updateBalance = amount;

      } else if (amount > 0 && account === savingAccount[0].accountName) {
          var updateBalance = amount;

        } else if (amount <0 && account === checkingAccount[0].accountName) {
          document.querySelector('.checking-wrapper').style.backgroundColor = 'red';

          var updateBalance = 0;

          displayResultCheckingOutput.value = "$"+0;
          displayMessage.textContent = "Insufficient Funds";

            } else if (amount <0 && account === savingAccount[0].accountName) {
                document.querySelector('.savings-wrapper').style.backgroundColor = 'red';

                var updateBalance = 0;

                displayResultSavingsOutput.value = "$"+0;
                displayMessage.textContent = "Insufficient Funds";
              }
          return updateBalance;
  }

  var depositAccount = function(amount, account)  {
    if (account === checkingAccount[0].accountName) {
      var result = checkingAccount[0].accountBalance + amount;

        } else if (account === savingAccount[0].accountName) {
        var result = savingAccount[0].accountBalance + amount;
    }

    return result;

  }

  var withdrawAccount = function(amount, account) {
    if (account === checkingAccount[0].accountName) {
      var result = checkingAccount[0].accountBalance - amount;

      } else if (account === savingAccount[0].accountName) {
        var result = savingAccount[0].accountBalance - amount;
      }

    return result;

  }


  withdrawSavingsBtn.addEventListener('click', function() {

    var validatedInput = validateTheInput(+savingsAmountInput.value);

    var withdrawFromSaving = withdrawAccount(validatedInput, "Saving");

    var validateOutput = validateAndUpdateOutput(withdrawFromSaving, "Saving");

    savingAccount[0].accountBalance = +validateOutput;

    displayResultSavingsOutput.value = validateOutput;
    savingsAmountInput.value = "";

  });

  withdrawCheckingBtn.addEventListener('click', function() {

    var validatedInput = validateTheInput(+checkingAmountInput.value);

    var withdrawFromChecking = withdrawAccount(validatedInput, "Checking");

    var validateOutput = validateAndUpdateOutput(withdrawFromChecking, "Checking");

    checkingAccount[0].accountBalance = +validateOutput;

    displayResultCheckingOutput.value = validateOutput;
    checkingAmountInput.value = "";

  });


  depositSavingsBtn.addEventListener('click', function() {

    var validatedInput = validateTheInput(+savingsAmountInput.value);

    var depositIntoSaving = depositAccount(validatedInput, "Saving");

    savingAccount[0].accountBalance = depositIntoSaving;
    displayResultSavingsOutput.value = depositIntoSaving;
    savingsAmountInput.value = "";
  });


  depositCheckingBtn.addEventListener('click', function() {
    var validatedInput = validateTheInput(+checkingAmountInput.value);

    var depositIntoChecking = depositAccount(validatedInput, "Checking");

    checkingAccount[0].accountBalance = depositIntoChecking;

    displayResultCheckingOutput.value = depositIntoChecking;
    checkingAmountInput.value = "";
  });
