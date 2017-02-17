console.log('JS connected');

var checkingAccount = {
  name: "Checking Account",
  balance: 100
};
var savingsAccount = {
  name: "Savings Account",
  balance: 100
};

// display balance of accounts
var savingsBalance = document.querySelector('.savings-balance');
savingsBalance = savingsAccount.balance;

var savingsBalance = document.querySelector('.savings-balance');
savingsBalance = savingsAccount.balance;

function depositToAccount(amount, account){
  account.balance += amount;
}

function withdrawFromAccount(amount, account){
  account.balance -= amount;
}

document.querySelector('.savings-widthdraw-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-savings').value;
  withdrawFromAccount(amount, savingsAccount);
  document.querySelector('.saving-balance').textContent = savingsAccount.balance.toFixed(2);
  document.querySelector('.input-amount-savings').value = '';
});

document.querySelector('.savings-deposit-btn').addEventListener('click', function(){
  var amount = +document.querySelector('.input-amount-savings').value;
  depositToAccount(amount, savingsAccount);
  document.querySelector('.saving-balance').textContent = savingsAccount.balance;
  document.querySelector('.input-amount-savings').value = '';
});

// CHecking accont
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
