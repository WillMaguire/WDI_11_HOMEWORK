console.log('crappy calculator');

var addTwoNumbers = function(num1, num2) {
  return num1 + num2;
}

var crapItBtn = document.querySelector('.crap-it-btn');
var num1Input = document.querySelector('.num1-input');
var num2Input = document.querySelector('.num2-input');

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
