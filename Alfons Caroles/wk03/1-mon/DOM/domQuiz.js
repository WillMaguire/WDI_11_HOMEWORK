console.log('DOM Quiz');

//1.
var secondH1 = document.querySelector('ul h1');

//2.
secondH1.textContent = 'Friend';

// 3.
document.querySelector('div.name').className = 'description';

// 4.
document.querySelector('div#settings').remove();

// 5
document.querySelector('div button').addEventListener('click', function() {
  document.querySelector('div').className = 'redBackground';
});

//6
var favouriteColor = document.querySelector('input#favCol').value;

//7
var divSelected = document.querySelector('div.my-articles');
var newElement = document.createElement('p');
    divSelected.appendChild(newElement);

// 8
  document.querySelector('ul.test').childElementCount;
