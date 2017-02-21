console.log('this is an app for ATM')

var savingsBalance = document.querySelector('#savings-balance');
var savingsInputField = document.querySelector('#savings-input');
var depositSavingBtn = document.querySelector('#deposit-savingsbtn');
var withdrawSavingBtn = document.querySelector('#withdraw-savingsbtn');

var checkBalance = document.querySelector('#check-balance');
var checkingInputField = document.querySelector('#checking-input');
var withdrawCheckBtn = document.querySelector('#withdraw-checkbtn');
var depositCheckBtn = document.querySelector('#deposit-checkbtn');

var balance = 500;
savingsBalance.textContent = balance;

depositSavingBtn.addEventListener('click', function(event) {
  balance += +savingsInputField.value;
  savingsBalance.textContent = balance;
});

withdrawSavingBtn.addEventListener('click', function(event) {
  balance -= +savingsInputField.value;
  savingsBalance.textContent = balance;
});

// var savingslowBalance = function() {
//   if (savingsBalance.balance < 1) {
//     
//   }
// }


checkBalance.textContent = balance;

depositCheckBtn.addEventListener('click', function(event) {
  balance += +checkingInputField.value;
  checkBalance.textContent = balance;
});

withdrawCheckBtn.addEventListener('click', function(event) {
  balance -= +checkingInputField.value;
  checkBalance.textContent = balance;
});
