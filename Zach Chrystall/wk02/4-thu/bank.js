console.log('Give a man a gun and he can rob a bank\nGive a man a bank and he can rob the world');

var savingsBalance = 0;
var checkingBalance = 0;

var savingsDeposit = document.querySelector('.savings-deposit-btn');
var savingsWithdraw = document.querySelector('.savings-withdraw-btn');
var checkingDeposit = document.querySelector('.checking-deposit-btn');
var checkingWithdraw = document.querySelector('.checking-withdraw-btn');
var savingsInput = document.querySelector('.savings-input');
var checkingInput = document.querySelector('.checking-input');

var updateAccountValues = function() {
  document.querySelector('.savings-balance').innerHTML = '$' + numberWithCommas(savingsBalance.toFixed(2));
  document.querySelector('.checking-balance').innerHTML = '$' + numberWithCommas(checkingBalance.toFixed(2));
  updateBackground()
  savingsInput.value = '';
  checkingInput.value = '';
}

var deposit = function(accIndicator) {
  if (accIndicator) {
    savingsBalance += (+savingsInput.value);
  } else {
    checkingBalance += (+checkingInput.value);
  }
  updateAccountValues()
}

var withdraw = function(accIndicator) {
  var savingsFundsChange = (+savingsInput.value)
  var checkingFundsChange = (+checkingInput.value)
  if (accIndicator) {
    if (checkEnoughFunds(savingsFundsChange, savingsBalance)) {
      savingsBalance -= savingsFundsChange;
    } else {
      overdraft(savingsFundsChange, accIndicator);
    }
  } else {
    if (checkEnoughFunds(checkingFundsChange, checkingBalance)) {
      checkingBalance -= checkingFundsChange;
    } else {
      overdraft(checkingFundsChange, accIndicator);
    }
  }
  updateAccountValues();
}

var checkEnoughFunds = function(fundsChange, balance) {
  if ((balance - fundsChange) >= 0) {
    return true;
  } else {
    return false;
  }
}

savingsDeposit.addEventListener('click', function() {
  var savingsTransaction = true;
  deposit(savingsTransaction);
});
savingsWithdraw.addEventListener('click', function() {
  var savingsTransaction = true;
  withdraw(savingsTransaction);
});
checkingDeposit.addEventListener('click', function() {
  var savingsTransaction = false;
  deposit(savingsTransaction);
});
checkingWithdraw.addEventListener('click', function() {
  var savingsTransaction = false;
  withdraw(savingsTransaction);
});

var updateBackground = function() {
  if (savingsBalance === 0) {
    savingsInput.style.backgroundColor = 'tomato';
  } else {
    savingsInput.style.backgroundColor = 'lightgrey';
  }
  if (checkingBalance === 0) {
    checkingInput.style.backgroundColor = 'tomato';
  } else {
    checkingInput.style.backgroundColor = 'lightgrey';
  }
}

var overdraft = function(fundsChange, accIndicator) {
  if ((savingsBalance + checkingBalance) >= fundsChange) {
    if (accIndicator) {
      fundsChange -= savingsBalance;
      savingsBalance = 0;
      checkingBalance -= fundsChange;
    } else {
      fundsChange -= checkingBalance;
      checkingBalance = 0;
      savingsBalance -= fundsChange;
    }
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


updateAccountValues()
