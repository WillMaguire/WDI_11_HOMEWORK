console.log('this is an app for ATM')

// Document Object Model // Event handlers

var savingsBalance = document.querySelector('#savings-balance');
var savingsInputField = document.querySelector('#savings-input');
var depositSavingBtn = document.querySelector('#deposit-savingsbtn');
var withdrawSavingBtn = document.querySelector('#withdraw-savingsbtn');

var checkBalance = document.querySelector('#check-balance');
var checkingInputField = document.querySelector('#checking-input');
var withdrawCheckBtn = document.querySelector('#withdraw-checkbtn');
var depositCheckBtn = document.querySelector('#deposit-checkbtn');

// Bank Balance

var balance = 500;

// Savings Account Balances
savingsBalance.textContent = balance;

depositSavingBtn.addEventListener('click', function(event) {
  balance += +savingsInputField.value; //the plus in front savingsInputField converts string in number
  savingsBalance.textContent = balance;
});

withdrawSavingBtn.addEventListener('click', function(event) {
  balance -= +savingsInputField.value;
  savingsBalance.textContent = balance;
});

// Check Account Balances
checkBalance.textContent = balance;

depositCheckBtn.addEventListener('click', function(event) {
  balance += +checkingInputField.value;
  checkBalance.textContent = balance;
});

withdrawCheckBtn.addEventListener('click', function(event) {
  balance -= +checkingInputField.value;
  checkBalance.textContent = balance;
});

// scenario

// chequebalance = 300;
// savingsBalance = 800;

// person withraws a 1000;

// as a result:
// cheque balance = 0;
// savings balance = 100;


// event handlers

// can replace the withdrawal with this function
//
// if (WithdrawalAmount > chequebalance && WithdrawalAmount < savingsBalance + chequebalance) {
//     savingsBalance = savingsBalance - (chequeWithdrawalAmount - chequebalance);
//     chequeBalance = 0;
//     withdraw remainder from savings account
//   }
//   else if (withdrawAmount < chequeBalance) {
//     console.log('normal withdrawal')
//   }
//   else {
//     console.log('cannot make withdrawal');
//   }
// }
