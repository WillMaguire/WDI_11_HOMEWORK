var checkingAccountBox = document.querySelector('.checking');
var savingAccountBox = document.querySelector('.savings');
var savingsBalance = document.querySelector('.saving-balance');
var checkingBalance = document.querySelector('.checking-balance');

var inputFieldChecking = document.querySelector('.input-amount-checking');
var inputFieldSavings = document.querySelector('.input-amount-savings');

//Accounts
var checkingAccount = {
  name: "Checking Account",
  balance: 100,
};

var savingsAccount = {
  name: "Savings Account",
  balance: 100,
};

// Functions
function depositToAccount(amount, account) {
  account.balance += amount;
}

  function withdrawFromAccount(amount, account, fromAccount){
  if (amount < account.balance) {
    account.balance -= amount;
    displayBalance(amount, account);
  } else if (amount > account.balance ) {
    coverOverdraft (amount, account, fromAccount);
    displayBalance();
  }
}

function coverOverdraft(amount, toAccount, fromAccount){
  //amount to be covered
  var amountToCover = amount - toAccount.balance;
  toAccount.balance = 0;
  fromAccount.balance -= amountToCover;
}

// Events
document.querySelector('.savings-widthdraw-btn').addEventListener('click', function(){
  var amount = +inputFieldSavings.value;
  withdrawFromAccount(amount, savingsAccount, checkingAccount);
  savingsBalance.textContent = +savingsAccount.balance.toFixed(2);
  checkingBalance.textContent = +checkingAccount.balance.toFixed(2);
  inputFieldSavings.value = '';
});

document.querySelector('.savings-deposit-btn').addEventListener('click', function(){
  var amount = +inputFieldSavings.value;
  depositToAccount(amount, savingsAccount);
  savingsBalance.textContent = savingsAccount.balance;
  inputFieldSavings.value = '';
});

// CHecking account
document.querySelector('.checking-widthdraw-btn').addEventListener('click', function(){
  var amount = +inputFieldChecking.value;
  withdrawFromAccount(amount, checkingAccount, savingsAccount);
  checkingBalance.textContent = checkingAccount.balance.toFixed(2);
  savingsBalance.textContent = savingsAccount.balance.toFixed(2);
  inputFieldChecking.value = '';
});

document.querySelector('.checking-deposit-btn').addEventListener('click', function(){
  var amount = +inputFieldChecking.value;
  depositToAccount(amount, checkingAccount);
  checkingBalance.textContent = checkingAccount.balance.toFixed(2);
  inputFieldChecking.value = '';
});

// Display balance when the document loads
var displayBalance = function(){
  savingsBalance.textContent = savingsAccount.balance.toFixed(2);
  checkingBalance.textContent = checkingAccount.balance.toFixed(2);

  if (savingsAccount.balance < 1 ){
    savingAccountBox.classList.toggle("negative");
  } else if (checkingAccount.balance < 1) {
    checkingAccountBox.classList.toggle("negative");
  }
};

//display balances when document loads
displayBalance();
