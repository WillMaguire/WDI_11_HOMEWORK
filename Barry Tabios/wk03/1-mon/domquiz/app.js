console.log("javscript working");

//(1.) select the second h1 element.

console.log(document.querySelector("ul h1"));


//(2.) change the contents of what you selected above to be 'Friend'?

document.querySelector("ul h1").textContent = "Friend";

//(3.) Write the correct JavaScript to change the class from 'name' to 'description' in the div element:

document.querySelector(".name").className = "descriptive";

//(4.) Write the correct JavaScript to remove the element with id 'settings':

document.querySelector("#settings").remove();


//(5.) How would you add an event listener to the button element inside the div, so that when it is clicked the background color of the div changes to red?

document.querySelector("div button").addEventListener('click', function(){
 document.querySelector("div button").style.background = 'red';
});

//(6.) Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.
var favouriteColor = document.querySelector("#favCol").value;


//(7.) Append a paragraph tag to the div with class 'my-articles'.
  var newDiv = document.createElement('p');
  document.querySelector('.my-articles').appendChild(newDiv);

//(8.) Write the necessary code to figure out how many list items are in the ul tag below:

var numberOfListItems = document.querySelectorAll('ul li').length; // or document.querySelectorAll('.list li').length
//console.log(numberOfListItems); 
