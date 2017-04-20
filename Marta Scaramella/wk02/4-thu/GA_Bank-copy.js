var withdrawBtnSav = document.querySelector('.saving-withdraw-btn');
var depositBtnSav = document.querySelector('.saving-deposit-btn');
var inputValueSav = document.querySelector('.saving-amount');
var balanceValueSav = document.querySelector('.saving-balance');

var withdrawBtnCheck = document.querySelector('.checking-withdraw-btn');
var depositBtnCheck = document.querySelector('.checking-deposit-btn');
var inputValueCheck = document.querySelector('.checking-amount');
var balanceValueCheck = document.querySelector('.checking-balance');

var withdrawSavFn = function (savBalance, amountFromSav){
  if (savBalance > amountFromSav) {
    return savBalance - amountFromSav;
  }
  else if (savBalance = amountFromSav) {
    document.querySelector('.savings').style.backgroundColor='#ff1a1a';
    document.querySelector('.saving-balance').style.backgroundColor='#ff1a1a';
    return savBalance - amountFromSav;
  }
  else{
    document.querySelector('.savings').style.backgroundColor='#ff1a1a';
    document.querySelector('.saving-balance').style.backgroundColor='#ff1a1a';
    balanceValueSav.value = '0';
    var diffAmount = amountFromSav - savBalance;
    var resultX = withdrawSavFromCheckFn(diffAmount, +balanceValueCheck.value);
    balanceValueCheck.value = resultX;
    return '0';
  }
}

var withdrawCheckFn = function(checkBalance, amountFromCheck){
  if (checkBalance > amountFromCheck) {
    return checkBalance - amountFromCheck;
  }
  else if (checkBalance = amountFromCheck) {
    document.querySelector('.checking').style.backgroundColor='#ff1a1a';
    document.querySelector('.checking-balance').style.backgroundColor='#ff1a1a';
    return checkBalance - amountFromCheck;
  }
  else {
    var diff = amountFromCheck - checkBalance;
    var resultXX = withdrawCheckFromSavFn(diff, +balanceValueSav.value);
    balanceValueSav.value = resultXX;
    // return '0';
  }
}

var withdrawSavFromCheckFn = function (amountFromCheck, checkBalance){
  if (checkBalance > amountFromCheck) {
    return checkBalance - amountFromCheck;
  }
  else if(checkBalance = amountFromCheck){
    document.querySelector('.checking').style.backgroundColor='#ff1a1a';
    return checkBalance - amountFromCheck;
  }
  else{
    return checkBalance;
  }
}

var withdrawCheckFromSavFn = function(amountFromSav, savBalance){
  if (amountFromSav > savBalance) {
    return savBalance - amountFromSav;
  }
  else if (amountFromSav = savBalance){
    document.querySelector('.savings').style.backgroundColor='#ff1a1a';
    return savBalance - amountFromSav;
  }
  else{
    return savBalance;
  }
}

var depositFn = function(num1, num2){
  return num1 + num2;
}

depositBtnSav.addEventListener('click', function(){
  var result = depositFn(+balanceValueSav.value, +inputValueSav.value);
  balanceValueSav.value = result;
  document.querySelector('.savings').style.backgroundColor='#00cca3';
  document.querySelector('.saving-balance').style.backgroundColor='#00cca3';
})

depositBtnCheck.addEventListener('click', function(){
  var result = depositFn(+balanceValueCheck.value, +inputValueCheck.value);
  balanceValueCheck.value = result;
  document.querySelector('.checking').style.backgroundColor='#b3ff99';
  document.querySelector('.checking-balance').style.backgroundColor='#b3ff99';
})

withdrawBtnSav.addEventListener('click', function(){
  var result = withdrawSavFn(+balanceValueSav.value , +inputValueSav.value);
  balanceValueSav.value = result;
    return result;
})

withdrawBtnCheck.addEventListener('click', function(){
  var result = withdrawCheckFn(+balanceValueCheck.value , +inputValueCheck.value);
  balanceValueCheck.value = result;
  return result;
})
