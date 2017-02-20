var transactionDetails = document.querySelector("#main");
var savingsAccount = {type:"savings",balance:200};
var checkingAccount = {type:"checking",balance:100};

var refreshBalanceDisplay = function(){
    var savingsBalanceDisplay = document.querySelector('#savingsBalanceAmountContainer');
    var checkingBalanceDisplay = document.querySelector('#checkingBalanceAmountContainer');
    savingsBalanceDisplay.innerHTML = savingsAccount.balance;
    checkingBalanceDisplay.innerHTML = checkingAccount.balance;
    var savingsHeading = document.querySelector('.atmWindowText');
    var checkingHeading = document.querySelector('.atmWindowText2');
    var savingsIcon = (document.querySelector('.savings')).querySelector('img');
    var checkingIcon = (document.querySelector('.checking')).querySelector('img');
    if(savingsAccount.balance>0){
      savingsHeading.innerText="$$$$ You have money in da Bank! $$$$";
      savingsIcon.src = "images/exe.gif";
      if(checkingAccount.balance>0){
        checkingHeading.innerText="$$$$ You have money in da Bank! $$$$";
        checkingIcon.src = "images/exe.gif";
      }else{
        checkingHeading.innerText="You got nothing in da Bank!";
        checkingIcon.src = "images/54.ico";
      }
    }else{
      savingsHeading.innerText="You got nothing in da Bank! "
        savingsIcon.src = "images/54.ico";
      if(checkingAccount.balance>0){
        checkingHeading.innerText="$$$$ You have money in da Bank! $$$$";
        checkingIcon.src = "images/exe.gif";
      }else{
        checkingHeading.innerText="You got nothing in da Bank!";
        checkingIcon.src = "images/exe.gif";
      }
    }
    clearInputArea();
};

var depositSavingsButton = document.querySelector('.savingsDeposit-btn');
depositSavingsButton.addEventListener('click',function(event){
var inputAmount = Number(document.querySelector(".savingsInputAmount").value);
depositCash(savingsAccount,inputAmount);
refreshBalanceDisplay();
});

var withdrawSavingsButton = document.querySelector('.savingsWithdraw-btn');
withdrawSavingsButton.addEventListener('click',function(event){
var inputAmount = Number(document.querySelector(".savingsInputAmount").value);
withdrawCash(savingsAccount,inputAmount);
refreshBalanceDisplay();
});

var depositCheckingButton = document.querySelector('.checkingDeposit-btn');
depositCheckingButton.addEventListener('click',function(event){
  var inputAmount = Number(document.querySelector(".checkingInputAmount").value);
  depositCash(checkingAccount,inputAmount);
  refreshBalanceDisplay();
});

var withdrawCheckingButton = document.querySelector('.checkingWithdraw-btn');
withdrawCheckingButton.addEventListener('click',function(event){
  var inputAmount = Number(document.querySelector(".checkingInputAmount").value);
  withdrawCash(checkingAccount,inputAmount);
  refreshBalanceDisplay();

});

var depositCash = function(account,amount){
  account.balance += amount;
  var accountClassName = '.' + account.type;
  positiveAccountBalance(accountClassName);
};

var withdrawCash = function(account,amount){
  if(amount>account.balance){
    if(overDraftStatus(amount)){
      overDraftTransact(account.type,amount);
      console.log("Overdraft Transaction");
    }else{
      console.log("Insufficient Funds");
    }
  }else{
    account.balance -= amount;
    if(account.balance===0){
      var accountClassName = '.' + account.type;
      emptyAccountBalance(accountClassName);
    }
  }
};

var overDraftStatus = function(withdrawAmount){
  if((savingsAccount.balance + checkingAccount.balance)>=withdrawAmount){
    return true;
  } else{
    return false;
  }
};

var overDraftTransact = function(accountType,amountWithdraw){
  if(accountType==="savings"){
    var overDraftAmount = (amountWithdraw-savingsAccount.balance);
    checkingAccount.balance -= overDraftAmount;
    savingsAccount.balance = 0;
    emptyAccountBalance(".savings");
    if(checkingAccount.balance===0){
      emptyAccountBalance(".checking");
    }

  }else if((accountType==="checking")){
    var overDraftAmount = (amountWithdraw-checkingAccount.balance);
    savingsAccount.balance -= overDraftAmount;
    checkingAccount.balance = 0;
    emptyAccountBalance(".checking");
    if(savingsAccount.balance===0){
      emptyAccountBalance(".savings");
    }

  }
};

var emptyAccountBalance = function(accountName){
  var accountPane = document.querySelector(accountName);
  accountPane.classList.add("noBalanceAccount");
};

var positiveAccountBalance = function(accountName){
  var accountPane = document.querySelector(accountName);
  accountPane.classList.remove("noBalanceAccount");
};

var clearInputArea = function(){
  document.querySelector(".savingsInputAmount").value="";
  document.querySelector(".checkingInputAmount").value="";
};


refreshBalanceDisplay();

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

move();
