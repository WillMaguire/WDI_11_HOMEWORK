// select the second h1 element.
var secondH1 = document.querySelector('ul > h1');

// change the contents of what you selected above to be 'Friend'
secondH1.innerHTML = 'friend';

// Write the correct JavaScript to change the class from 'name' to 'description' in the div element:
document.querySelector('.name').className = 'description'

// Write the correct JavaScript to remove the element with id 'settings':
document.querySelector('#settings').remove();

// How would you add an event listener to the button element inside the div, so that
// when it is clicked the background color of the div changes to red?

var btn = document.querySelector('div > button')
btn.addEventListener('click', function(){
btn.style.backgroundColor = 'red';
})

// Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.
var favouriteColor = document.getElementById('favCol').value;


// Append a paragraph tag to the div with class 'my-articles'.
var tagElem = document.createElement("p")
document.querySelector('.my-articles').appendChild(tagElem);

// Write the necessary code to figure out how many list items are in the ul tag below:

var list = document.getElementsByTagName('li');
var itemNumber = list.length;
