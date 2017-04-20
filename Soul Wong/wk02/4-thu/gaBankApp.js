var savingsAccount = 300;
var checkingAccount = 150;

var depositCash = function(account,amount){
  if(account === "savings"){
    savingsAccount += amount;
  }else if(account === "checking"){
    checkingAccount += amount;
  }else{
    console.log("Cash Refunded, Account Doesn't exist");
  }
};

var withdrawCash = function(account,amount){
  if(account === "savings" && !checkOverdrawn()){
    savingsAccount -= amount;
  }else if(account === "checking" && !checkOverdrawn()){
    checkingAccount -= amount;
  }else{
    console.log("Transaction failed");
  }
};

var checkOverdrawn = function(){
  if((savingsAccount + checkingAccount)>0){
    return false;
  }else{
    return true;
  }
}

//need to make this function reusable for other account
var testDeposit = function(event){
  var depositAmount = +savingsBalanceInput.value;
  savingsAccount += depositAmount;
  console.log(depositAmount);
}

var depositSavingsButton = document.querySelector('.savingsDeposit-btn');
depositSavingsButton.addEventListener('click',function(event){
  testDeposit(event);
});


var savingsBalanceInput = document.querySelector('.savingsAccountInput');
savingsBalanceInput.value = savingsAccount;
var checkingBalanceInput = document.querySelector('.checkingAccountInput');
checkingBalanceInput.value = checkingAccount;
