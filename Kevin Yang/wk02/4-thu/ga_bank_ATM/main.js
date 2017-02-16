console.log('connected to html')

var savingsAmount = document.querySelector('.savings_amounts')
var initialAmountS = document.querySelector('.initAmountS')
var checkingAmount = document.querySelector('.checking_amounts')
var initialAmountC = document.querySelector('.initAmountC')

var addTwoNum = function(x,y){
  return (x + y).toFixed(2);
}

var SubtractBetweenNum = function(x,y){
  return (x - y).toFixed(2);
}

document.querySelector('.depositS').addEventListener('click', function() {
  var result = addTwoNum(+savingsAmount.value, +initialAmountS.textContent);
  document.querySelector('.initAmountS').innerHTML = result;
  savingsAmount.value ='';
})

document.querySelector('.withdrawS').addEventListener('click', function() {
  var result = SubtractBetweenNum(+initialAmountS.textContent,+savingsAmount.value);
  document.querySelector('.initAmountS').innerHTML = result;
  savingsAmount.value ='';
})

document.querySelector('.depositC').addEventListener('click', function() {
  var result = addTwoNum(+checkingAmount.value, +initialAmountC.textContent);
  document.querySelector('.initAmountC').innerHTML = result;
  checkingAmount.value ='';
})

document.querySelector('.withdrawC').addEventListener('click', function() {
  var result = SubtractBetweenNum(+initialAmountC.textContent,+checkingAmount.value);
  document.querySelector('.initAmountC').innerHTML = result;
  checkingAmount.value ='';
})

debugger;

//below is backgrounColor change that does not work
if (initialAmountS.textContent === "00.00"){
  document.querySelector('.savings').style.backgroundColor = 'red';
} else if (+initialAmountS.textContent > 0){
  // document.querySelector('.savings').removeAttribute("backgroundColor");
  // var style = document.defaultView.getComputedStyle(document.querySelector('.checking'), null).style.backgroundColor = 'grey'
  document.querySelector('.checking').style.backgroundColor = 'grey';
}

if (initialAmountS.textContent === "00.00"){
  document.querySelector('.checking').style.backgroundColor = 'red';
} else if(initialAmountS.textContent != "00.00"){
  document.querySelector('.checking').style.backgroundColor = 'grey';
}


//considering alerting negative value

// if (+initialAmountS.textContent <= 0){
//   document.querySelector('.withdrawS').setAttribute("disabled","disabled");
// }

if (+initialAmountS.textContent > 0) {
   document.querySelector('.withdrawS').removeAttribute("disabled");
}

//considering preventing overdraft
// if(+initialAmountS.textContent > +savingsAmount.value){
//   document.querySelector('.withdrawS').addEventListener('click', function(){
//     return 'Overdraft prevention';
//   });
