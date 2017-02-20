
var withdrawBtnSav = document.querySelector('.saving-withdraw-btn');
var depositBtnSav = document.querySelector('.saving-deposit-btn');
var inputValueSav = document.querySelector('.saving-amount');
var balanceValueSav = document.querySelector('.saving-balance');

var withdrawBtnCheck = document.querySelector('.checking-withdraw-btn');
var depositBtnCheck = document.querySelector('.checking-deposit-btn');
var inputValueCheck = document.querySelector('.checking-amount');
var balanceValueCheck = document.querySelector('.checking-balance');

// var colorSwitcher = function(){
//   if (balanceValueSav.value == '0' && balanceValueCheck.value == '0') {
//     document.querySelector('.savings').style.backgroundColor='#ff1a1a';
//     document.querySelector('.checking').style.backgroundColor='#ff1a1a';
//   }
//   else if (balanceValueCheck.value = '0' && balanceValueSav.value != '0') {
//     document.querySelector('.checking').style.backgroundColor='#ff1a1a';
//     document.querySelector('.savings').style.backgroundColor='#00cca3';
//   }
//   else if (balanceValueCheck.value !== '0' && balanceValueSav.value == '0') {
//     document.querySelector('.checking').style.backgroundColor='#b3ff99';
//     document.querySelector('.savings').style.backgroundColor='#ff1a1a';
//   }
//   else{
//     document.querySelector('.savings').style.backgroundColor='#00cca3';
//     document.querySelector('.checking').style.backgroundColor='#b3ff99';
//   }
// }

var withdrawFnSav = function (amountFromSav, SavBalance){
  if (SavBalance >= amountFromSav) {
    // colorSwitcher();
    return SavBalance - amountFromSav;
  }
  else{
    // document.querySelector('.savings').style.backgroundColor='#ff1a1a';
    var resultX = withdrawFnSavFromCheck(+balanceValueCheck.value , (amountFromSav - SavBalance));
    balanceValueCheck.value = resultX;
    colorSwitcher();

        // if (balanceValueCheck.value = '0') {
          // document.querySelector('.checking').style.backgroundColor='#ff1a1a';
          // document.querySelector('.savings').style.backgroundColor='#ff1a1a';
      //     return 0;
      //   }
      // else{
      //   return result;
      // }
  }
}

var withdrawFnCheck = function(num1, num2){
  if (num1 >= num2) {
    return num1 - num2;
  }
  else {
    // document.querySelector('.checking').style.backgroundColor='#ff1a1a';
    var resultXX = withdrawFnCheckFromSav(+balanceValueSav.value , num2-num1);
    balanceValueSav.value = resultXX;
    if (balanceValueSav.value = '0') {
      // document.querySelector('.savings').style.backgroundColor='#ff1a1a';
      // document.querySelector('.checking').style.backgroundColor='#ff1a1a';
      return 0;
    }
    else{
      return result;
    }
  }
}

var withdrawFnSavFromCheck = function (CheckBalance, amountFromCheck){
  if (CheckBalance >= amountFromCheck) {
    return CheckBalance - amountFromCheck;
      if (CheckBalance == amountFromCheck) {
        return '0';
      }
  }
  else{
    return CheckBalance;
  }
}

var withdrawFnCheckFromSav = function(val1, val2){
  if (val1 >= val2) {
    return val1 - val2;
  }
  else{
    return val1;
  }
}

var depositFn = function(num1, num2){
  return num1 + num2;
}

depositBtnSav.addEventListener('click', function(){
  var result = depositFn(+balanceValueSav.value, +inputValueSav.value);
  balanceValueSav.value = result;
  // document.querySelector('.savings').style.backgroundColor='#00cca3';
})

depositBtnCheck.addEventListener('click', function(){
  var result = depositFn(+balanceValueCheck.value, +inputValueCheck.value);
  balanceValueCheck.value = result;
  // document.querySelector('.checking').style.backgroundColor='#b3ff99';
})

withdrawBtnSav.addEventListener('click', function(){
  var result = withdrawFnSav(+inputValueSav.value, +balanceValueSav.value);
  balanceValueSav.value = result;
    return result;
    // if (balanceValueSav.value = '0') {
    //   document.querySelector('.savings').style.backgroundColor='#ff1a1a';
    // }
    // else{
    //   document.querySelector('.savings').style.backgroundColor='#b3ff99';
    // }
})

withdrawBtnCheck.addEventListener('click', function(){
  var result = withdrawFnCheck(+balanceValueCheck.value , +inputValueCheck.value);
  balanceValueCheck.value = result;
  return result;
    // if (balanceValueCheck.value = '0') {
    //   document.querySelector('.checking').style.backgroundColor='#ff1a1a';
    // }
    // else{
    //   document.querySelector('.checking').style.backgroundColor='#b3ff99';
    // }
})
