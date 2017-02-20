console.log('Give a man a gun and he can rob a bank\nGive a man a bank and he can rob the world');

var savingsBalance = 100;
var checkingBalance = 100;



var savingsDeposit = document.querySelector('.savings-deposit-btn');
var savingsWithdraw = document.querySelector('.savings-withdraw-btn');
var checkingDeposit = document.querySelector('.checking-deposit-btn');
var checkingWithdraw = document.querySelector('.checking-withdraw-btn');
var savingsInput = document.querySelector('.savings-input');
var checkingInput = document.querySelector('.checking-input');

var savingsAccount = {
  balance: savingsBalance,
  input: parseInt(savingsInput.value),
  inputBox: savingsInput,
  deposit: function() {
    updateInputValues();
    savingsAccount.balance += savingsAccount.input;
    updateAccountValues()
    updateBackground(savingsAccount.balance, savingsAccount.inputBox);
  },
  withdraw: function() {
    updateInputValues()
    if (checkEnoughFunds(savingsAccount.balance, savingsAccount.input)) {
      savingsAccount.balance -= (+savingsAccount.input);
    } else {
      overdraft(savingsAccount.balance, savingsAccount.input, true)
    }
    updateAccountValues();
    updateBackground(savingsAccount.balance, savingsAccount.inputBox);
  }
}

var checkingAccount = {
  balance: checkingBalance,
  input: parseInt(checkingInput.value),
  inputBox: checkingInput,
  deposit: function() {
    updateInputValues();
    checkingAccount.balance += (+checkingAccount.input);
    updateAccountValues()
    updateBackground(checkingAccount.balance, checkingAccount.inputBox);
  },
  withdraw: function() {
    updateInputValues();
    if (checkEnoughFunds(checkingAccount.balance, checkingAccount.input)) {
      checkingAccount.balance -= (+checkingAccount.input);
    } else {
      overdraft(checkingAccount.balance, checkingAccount.input, false)
    }
    updateAccountValues();
    updateBackground(checkingAccount.balance, checkingAccount.inputBox);
  }
}


var updateAccountValues = function() {
  document.querySelector('.savings-balance').innerHTML = '$' + numberWithCommas(savingsAccount.balance.toFixed(2));
  document.querySelector('.checking-balance').innerHTML = '$' + numberWithCommas(checkingAccount.balance.toFixed(2));
  // updateBackground()
}


var checkEnoughFunds = function(balance, fundsChange) {
  if ((balance - fundsChange) >= 0) {
    return true;
  } else {
    return false;
  }
}

savingsDeposit.addEventListener('click', savingsAccount.deposit);
savingsWithdraw.addEventListener('click', savingsAccount.withdraw);
checkingDeposit.addEventListener('click', checkingAccount.deposit);
checkingWithdraw.addEventListener('click', checkingAccount.withdraw);

var updateBackground = function(balance, input) {
  if (balance === 0) {
    input.style.backgroundColor = 'tomato';
  } else {
    input.style.backgroundColor = 'lightgrey';
  }
  // if (checkingAccount.balance === 0) {
  //   checkingInput.style.backgroundColor = 'tomato';
  // } else {
  //   checkingInput.style.backgroundColor = 'lightgrey';
  // }
}

var overdraft = function(balance, fundsChange, accIndicator) {
  if ((savingsAccount.balance + checkingAccount.balance) >= fundsChange) {
    if (accIndicator) {
      fundsChange -= savingsAccount.balance;
      savingsAccount.balance = 0;
      checkingAccount.balance -= fundsChange;
    } else {
      fundsChange -= checkingAccount.balance;
      checkingAccount.balance = 0;
      savingsAccount.balance -= fundsChange;
    }
  }
}

function updateInputValues() {
  savingsAccount.input = parseInt(savingsInput.value);
  checkingAccount.input = parseInt(checkingInput.value);
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


updateAccountValues()
updateBackground(savingsAccount.balance, savingsAccount.inputBox);
updateBackground(checkingAccount.balance, checkingAccount.inputBox);
