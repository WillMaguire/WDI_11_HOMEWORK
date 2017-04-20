console.log('i heart java');

// 1, 2

var secondH1Element = document.querySelector('ul h1');
secondH1Element.textContent = 'Friend';

// 3

document.querySelector('div').className = 'description';

// 4

document.querySelector('.settings').remove();

// 5

var redBackgroundBtn = document.querySelector('div button');
redBackgroundBtn.addEventListener('click', function() {
  document.getElementsByClassName('body')[0].style.backgroundColor = 'red';
});

// 6

var favouriteColor = document.querySelector('#favCol').value;

// 7

var newItem = document.createElement('p');
document.querySelector('.my-articles').appendChild(newItem);

// 8

document.querySelectorAll('ul li').length;
