console.log('crappy calculator');

var addTwoNumbers = function(num1, num2) {
  return num1 + num2;
}

//button ....:::...> class selectors
var crapItBtn = document.querySelector('.crap-it-btn');
// document.querySelectAll('.class');
//input1
var num1Input = document.querySelector('.num1-input');
//input2
var num2Input = document.querySelector('.num2-input');

//result
var resultInput = document.querySelector('.result');

var bodyMain = document.querySelector('body');

var themeOne = document.querySelector('.theme-one');
themeOne.addEventListener('click', function() {
  bodyMain.style.backgroundColor = 'mistyrose';
});

var themeTwo = document.querySelector('.theme-two');
themeTwo.addEventListener('click', function() {
  bodyMain.style.backgroundColor = 'plum';
});

var themeThree = document.querySelector('.theme-three');
themeThree.addEventListener('click', function() {
  bodyMain.style.backgroundColor = 'tomato';
});

var themeFour = document.querySelector('.theme-four');
themeFour.addEventListener('click', function() {
  bodyMain.style.backgroundColor = 'mintcream';
});


var clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', function() {
  num1Input.value = '';
  num2Input.value = '';
  resultInput.value = '';
});


crapItBtn.addEventListener('click', function() {
  var result = addTwoNumbers(+num1Input.value, +num2Input.value);
  resultInput.value = result;
});

// challenges:

// 1. create another button which clear all the inputs back to the beginning

// 2. theme switcher to work, clicking in the box should update background color

// var changeBackgoundColor = function(event) {
//   document.body.style.backgroundColor = getComputerSyle(event. target)
// }
// var themeOneBox = document.querySelector('.theme-one');
//
// var colors = ['plum', 'mistryrose', 'tomato', 'mintcream'];
//
// themeOneBox.addEventListener('click', function(event) {
//   // document.body.style.backgroundColor = event.target.getAttribute('data-color');

  change
})
