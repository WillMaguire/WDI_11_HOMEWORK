var checkingAccountBox = document.querySelector('.checking');
var savingAccountBox = document.querySelector('.savings');

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
function depositToAccount(amount, account){
  account.balance += amount;
}

function withdrawFromAccount(amount, account){
  if (amount < account.balance) {
    account.balance -= amount;
  } else {
  }
}
//
// function coverOverdraft(amount, toAccount, fromAccount){
//   //amount
// }

// Events
document.querySelector('.savings-widthdraw-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-savings').value;
  // debugger
  withdrawFromAccount(amount, savingsAccount);
  document.querySelector('.saving-balance').textContent = +savingsAccount.balance.toFixed(2);
  document.querySelector('.input-amount-savings').value = '';
});

document.querySelector('.savings-deposit-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-savings').value;
  depositToAccount(amount, savingsAccount);
  document.querySelector('.saving-balance').textContent = savingsAccount.balance;
  document.querySelector('.input-amount-savings').value = '';
});

// CHecking account
document.querySelector('.checking-widthdraw-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-checking').value;
  withdrawFromAccount(amount, checkingAccount);
  document.querySelector('.checking-balance').textContent = checkingAccount.balance.toFixed(2);
  document.querySelector('.input-amount-checking').value = '';
});

document.querySelector('.checking-deposit-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-checking').value;
  depositToAccount(amount, checkingAccount);
  document.querySelector('.checking-balance').textContent = checkingAccount.balance;
  document.querySelector('.input-amount-checking').value = '';
});

// Display balance when the document loads
var displayBalance = function(){
  document.querySelector('.saving-balance').textContent = savingsAccount.balance;
  document.querySelector('.checking-balance').textContent = checkingAccount.balance;

  if (savingsAccount.balance < 1 ){
    savingAccountBox.classList.toggle("negative");
  } else if (checkingAccount.balance < 1) {
    checkingAccountBox.classList.toggle("negative");
  }
};
displayBalance();
