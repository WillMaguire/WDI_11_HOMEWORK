// Question 1
document.querySelectorAll('h1')[1];

// Question 2
document.querySelectorAll('h1')[1].textContent = 'Friend';

// Question 3
document.querySelector('.name').className = 'description';

// Question 4
document.querySelector('#settings').remove();

// Question 5
var div = document.querySelector('div');

div.querySelector('button').addEventListener('click', function() {
  div.style.backgroundColor = 'red';
});

// Question 6
var favouriteColor = document.querySelector('#favCol').value;

// Question 7
document.querySelector('.my-articles').appendChild(document.createElement('p'));

// Question 8
document.querySelectorAll('ul li').length;
