console.log('JS connected');

var checkingAccount = {
  name: "Checking Account",
  balance: 100.00
};
var savingsAccount = {
  name: "Savings Account",
  balance: 100
};

function depositToAccount(amount, account){
  account.balance += amount;
}

function withdrawFromAccount(amount, account){
  account.balance -= amount;
}

document.querySelector('.savings-widthdraw-btn').addEventListener('click', function(){
  var amount = document.querySelector('.input-amount-savings').value;
  withdrawFromAccount(amount, savingsAccount);

  document.querySelector('.saving-balance').textContent = '$' + savingsAccount.balance.toFixed(2);
});


// get amount from input field
