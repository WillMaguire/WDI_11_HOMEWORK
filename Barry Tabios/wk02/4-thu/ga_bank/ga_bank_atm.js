console.log('JAVASCRIPT ONLINE BANK');

var savings = 30000;
var cheque = 15000;

var clearInputChequeAccount = document.querySelector('.chequeInput')
var clearInputSavingsAccount = document.querySelector('.savingsInput')

var chequeBalance = document.querySelector('.chequeBalanceOutput');
var savingsBalance = document.querySelector('.savingsBalanceOutput');


//Diferrent way of selecting DOM
clearInputChequeAccount.addEventListener('click', function(){
  clearInputChequeAccount.value = '';
});


clearInputSavingsAccount.addEventListener('click', function(){
  clearInputSavingsAccount.value = '';
});


// USES IDs to listen for events.
chequeWithdrawBtn.addEventListener('click',function(){
  var chequeWithdraw = document.querySelector('.chequeInput');
  cheque = cheque - (+chequeWithdraw.value);
  chequeBalance.textContent = '$' + cheque;

});

chequeDepositBtn.addEventListener('click', function(){
  var chequeDeposit = document.querySelector('.chequeInput');
  cheque = cheque + (+chequeDeposit.value);
  chequeBalance.textContent = '$' + cheque;
});

savingsWithdrawBtn.addEventListener('click', function(){
  var savingsWithdraw = document.querySelector('.savingsInput');
  savings = savings - (+savingsWithdraw.value);
  savingsBalance.textContent = '$' + savings;
})

savingsDepositBtn.addEventListener('click', function(){
  var savingsDeposit = document.querySelector('.savingsInput');
  savings = savings + (+savingsDeposit.value);
  savingsBalance.textContent = '$' + savings;
})
