console.log('octopussbank');
var savDeposit = document.querySelector('#sav_deposit');
var savWithdraw = document.querySelector('#sav_withdraw');
var savDepositButton = document.querySelector('#savDepositButton');
var savWithdrawButton = document.querySelector('#savWithdrawButton');
var savBalance = document.querySelector('#savBalance');
var cacheSavBalance = 0;


savDepositButton.addEventListener('click', function(){
   cacheSavBalance += +savDeposit.value;
   savBalance.textContent = cacheSavBalance;
   savDeposit.value = null;
});

savWithdrawButton.addEventListener('click', function(){
   cacheSavBalance -= +savWithdraw.value;
   savBalance.textContent = cacheSavBalance;
   savWithdraw.value = null;
});

var chqDeposit = document.querySelector('#chq_deposit');
var chqWithdraw = document.querySelector('#chq_withdraw');
var chqDepositButton = document.querySelector('#chqDepositButton');
var chqWithdrawButton = document.querySelector('#chqWithdrawButton');
var chqBalance = document.querySelector('#chqBalance');
var cacheChqBalance = 0;

chqDepositButton.addEventListener('click', function(){
   cacheChqBalance += +chqDeposit.value;
   chqBalance.textContent = cacheChqBalance;
   chqDeposit.value = null;
});

chqWithdrawButton.addEventListener('click', function(){
  var chqWithdrawValue = parseInt(chqWithdraw.value);
   if (chqWithdrawValue > cacheChqBalance && chqWithdrawValue < (cacheChqBalance + cacheSavBalance)) {
      cacheSavBalance = cacheSavBalance - (chqWithdrawValue - cacheChqBalance);
      cacheChqBalance = 0;
      chqBalance.textContent = cacheChqBalance;
      savBalance.textContent = cacheSavBalance;
      chqWithdraw.value = null;
  } else if (chqWithdrawValue <= cacheChqBalance) {
    cacheChqBalance -= chqWithdrawValue;
    chqBalance.textContent = cacheChqBalance;
    chqWithdraw.value = null;
    console.log('test');
  } else {
    chqWithdraw.value = null;
  }
});

//
//
//
//
//
//
//
//
//
//




// var addAccountBalance = function(deposit) {
//
// };
// // var subtractAccountBalance = function(savAccountBalance) {
//   if (withdraw.value <= savAccountBalance.value) {
//   savAccountBalance.value -= withdraw.value;
//   return true
//   }
//   else if return false
//    }
// }
// savDepositButton.addEventListener('click', function() {
//    addAccountBalance(deposit.value)
// }
//
// function displayBalance() {
//   balance.innerHTML = savAccountBalance;
// }

// var addTwoNumbers = function(num1, num2) {
//   return num1 + num2;
// }
// var crapItButton = document.querySelector('.crap-it-button');
//
// var resultInput = document.querySelector('.result');
// //button
// var crapItButton = document.querySelector('.crap-it-button');
//
// var num1Input = document.querySelector('.num1-input');
//
// var num2Input = document.querySelector('.num2-input');
//
// var clearItButton = document.querySelector('.clear-it-button');
//
// crapItButton.addEventListener('click', function() {
//   var result = addTwoNumbers(+num1Input.value, +num2Input.value);
//   //return
// resultInput.value = result;
// });
//
// clearItButton.addEventListener('click', function() {
//   num1Input.value = null;
//   num2Input.value = null;
//   resultInput.value = null;
// //add depositbutton
//
// var input1 = document.getElementsByTagName('input')[0];
// var input2 = document.getElementsByTagName('input')[1];
// var go = document.getElementsByTagName('button')[0];
// var resultSpan = document.getElementsByTagName('span')[0];
//
// var sum = function(num1, num2) {
//   return num1 + num2;
// }
// var calculate = function() {
//   var num1 = parseInt(input1.value);
//   var num2 = parseInt(input2.value);
//   resultSpan.textContent = sum(num1, num2);
// }
//
// go.addEventListener('click', calculate);
