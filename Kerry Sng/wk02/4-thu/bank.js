
var withdrawBtn = document.querySelector('.withdraw-btn');
var depositBtn = document.querySelector('.deposit-btn');
var balanceContainer = document.querySelector('.accountBal');
var amountInput = document.querySelector('#amount');

var balance = "$" + ' ' + 500;
balanceContainer.textContent = balance;

depositBtn.addEventListener('click', function() {
  balance += +amountInput.value;
  balanceContainer.textContent = balance;
});

withdrawBtn.addEventListener('click', function() {
  balance -= +amountInput.value;
  balanceContainer.textContent = balance;
});
// withdrawBtn.addEventListener('click', function() {
//
//   var savings = balance(+accountBal.value, - +num1Input.value);
//
//   savingInput.value = savings;
// });
var checkWithdraw = document.querySelector('.withdraw1-btn');
var checkDeposit = document.querySelector('.deposit1-btn');
var checkBalance = document.querySelector('.checkBal');
var checkInput = document.querySelector('#checking-btn');

var balance = "$" + ' ';
checkBalance.textContent = balance;

checkWithdraw.addEventListener('click', function() {
  balance -= +checkInput.value;
  checkBalance.textContent = balance;
})

checkDeposit.addEventListener('click', function() {
  balance += +checkInput.value;
  checkBalance.textContent = balance;
})
