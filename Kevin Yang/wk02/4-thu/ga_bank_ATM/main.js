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

//saving block
var savings = document.querySelector('.savings');

document.querySelector('.depositS').addEventListener('click', function() {
  var result = addTwoNum(+savingsAmount.value, +initialAmountS.textContent);
  document.querySelector('.initAmountS').innerHTML = result;
  savingsAmount.value ='';

  if (+initialAmountS.textContent > 0){
    savings.style.backgroundColor = 'grey';
  }

  if (+initialAmountS.textContent > 0) {
     document.querySelector('.withdrawS').removeAttribute("disabled");
  }
})

document.querySelector('.withdrawS').addEventListener('click', function() {
  var result = SubtractBetweenNum(+initialAmountS.textContent,+savingsAmount.value);

  if(+initialAmountS.textContent < +savingsAmount.value){
    alert('overdraft prevented');
    console.log('test');
    savingsAmount.value ='';
    return;
  }

  document.querySelector('.initAmountS').innerHTML = result;
  savingsAmount.value ='';

  if (+initialAmountS.textContent === 0){
    savings.style.backgroundColor = 'red';
  }

  if (+initialAmountS.textContent <= 0){
    document.querySelector('.withdrawS').setAttribute("disabled","disabled");
  }

})

//checking block
document.querySelector('.depositC').addEventListener('click', function() {


  var result = addTwoNum(+checkingAmount.value, +initialAmountC.textContent);
  document.querySelector('.initAmountC').innerHTML = result;
  checkingAmount.value ='';

  if(+initialAmountC.textContent > 0){
    document.querySelector('.checking').style.backgroundColor = 'grey';
  }

  if (+initialAmountC.textContent > 0) {
     document.querySelector('.withdrawC').removeAttribute("disabled");
  }
})

document.querySelector('.withdrawC').addEventListener('click', function() {
  var result = SubtractBetweenNum(+initialAmountC.textContent,+checkingAmount.value);

  if(+initialAmountC.textContent < +checkingAmount.value){
    alert('overdraft prevented');
    console.log('test');
    checkingAmount.value ='';
    return;
  }

  document.querySelector('.initAmountC').innerHTML = result;
  checkingAmount.value ='';

  if (+initialAmountC.textContent <= 0){
    document.querySelector('.checking').style.backgroundColor = 'red';
  }

  if (+initialAmountC.textContent <= 0){
    document.querySelector('.withdrawC').setAttribute("disabled","disabled");
  }
})



//below is backgrounColor change that does not work
if (initialAmountS.textContent === "00.00"){
  savings.style.backgroundColor = 'red';
}

if (initialAmountS.textContent === "00.00"){
  document.querySelector('.checking').style.backgroundColor = 'red';
}

//considering alerting negative value

if (+initialAmountS.textContent <= 0){
  document.querySelector('.withdrawS').setAttribute("disabled","disabled");
}

if (+initialAmountS.textContent <= 0){
  document.querySelector('.withdrawC').setAttribute("disabled","disabled");
}

//clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// date
var d = new Date();
document.getElementById("demo1").innerHTML = d.getMonth();

var e = new Date();
document.getElementById("demo2").innerHTML = e.getFullYear();

var f = new Date();
document.getElementById("demo3").innerHTML = f.getDay();
