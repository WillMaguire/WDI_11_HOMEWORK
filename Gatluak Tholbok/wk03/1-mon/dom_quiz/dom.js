console.log('dom quiz');

// Question 1: select the second h1 element

var changeToHelloFriend = document.getElementsByTagName('ul')[0];

// Question 2: schange the contents of what you selected above to be 'Friend'?

changeToHelloFriend.textContent = 'Hello Friend';

// Question 3: Write the correct JavaScript to change the class from 'name' to 'description' in the div element:

var newName = document.querySelector('.name').className = 'new-name';

// Question 4: Write the correct JavaScript to remove the element with id 'settings':

var removeId = document.getElementById('settings').remove();

// Question 5: How would you add an event listener to the button element inside the div, so that when it is clicked the background color of the div changes to red?

var redBtn = document.querySelector('button');
redBtn.addEventListener('click', function() {
  var getDiv = document.querySelectorAll('div');
  getDiv[1].style.backgroundColor = 'red';
});

// Question 6: Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.

var favouriteColor = document.getElementById('favCol');

// Question 7:Append a paragraph tag to the div with class 'my-articles'.

var newEl = document.createElement('p');
document.querySelector('.my-articles').appendChild(newEl);

// Question 8: Write the necessary code to figure out how many list items are in the ul tag below:

var selectUlLists = document.querySelectorAll('ul')[1];
