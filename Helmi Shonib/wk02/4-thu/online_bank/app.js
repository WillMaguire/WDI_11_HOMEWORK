console.log("Bank Online");

var accountBalance = document.querySelector('.sav_screen');
accountBalance.value = 0;

var savScreen = document.querySelector('.sav_screen');
var sav_deposit_button = document.querySelector('.sav_deposit_button');
var sav_withdraw_button = document.querySelector('.sav_withdraw_button');

 var savTotalBalance = function (savDepositAmount) {

 	var savDepositAmount = document.querySelector('.sav_enter_amount_screen');

  	savScreen.value = +savDepositAmount.value + +accountBalance.value;
}

sav_deposit_button.addEventListener('click', savTotalBalance);



  var savTotalBalance2 = function (savWithdrawAmount) {

    var savWithdrawAmount = document.querySelector('.sav_enter_amount_screen');
    savScreen.value = +accountBalance.value - +savWithdrawAmount.value ;
      if (+accountBalance.value < 0)  {
        document.querySelector('.sav_screen').value = 'Please check balance amount';
        document.querySelector('.sav_screen').style.background = 'red';
        } else {
          savTotalBalance2;
          document.querySelector('.sav_screen').style.background = 'grey';
        }

  }

sav_withdraw_button.addEventListener('click', savTotalBalance2);

var accountBalance2 = document.querySelector('.chq_screen');
accountBalance2.value = 0;

var chqScreen = document.querySelector('.chq_screen');
var chq_deposit_button = document.querySelector('.chq_deposit_button');
var chq_withdraw_button = document.querySelector('.chq_withdraw_button');

 var chqTotalBalance = function (chqDepositAmount) {

 	var chqDepositAmount = document.querySelector('.chq_enter_amount_screen');

  	chqScreen.value = +chqDepositAmount.value + +accountBalance2.value;
}

chq_deposit_button.addEventListener('click', chqTotalBalance);

  var chqTotalBalance2 = function (chqWithdrawAmount) {

    var chqWithdrawAmount = document.querySelector('.chq_enter_amount_screen');
    chqScreen.value = +accountBalance2.value - +chqWithdrawAmount.value;
      if (+accountBalance2.value < 0) {
          document.querySelector('.chq_screen').value = 'Please check balance amount';
          document.querySelector('.chq_screen').style.background = 'red';
        } else {
          chqTotalBalance2;
          document.querySelector('.chq_screen').style.background = 'grey';
        }
  }
chq_withdraw_button.addEventListener('click', chqTotalBalance2);
