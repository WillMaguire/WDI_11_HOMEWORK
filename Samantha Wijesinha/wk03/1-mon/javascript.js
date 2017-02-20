console.log("js");


//select second h1 element
//change contents to be Friend


var question1 = document.querySelector('h1').textContent= "friend"


var question2 = document.querySelector('.name').className = "description";


var question3 = document.getElementById("settings").removeAttribute("");

//question 4
var changeBackgroundBtn = document.querySelector('.click-me')

changeBackgroundBtn.addEventListener('click', function() {
document.querySelector('body').style.backgroundColor = 'red';

});


//question 6
var favouriteColor = document.querySelector('#favCol')
favouriteColor.value;


//question 7
var element = document.createElement("p");
document.querySelector('.my-articles').appendChild(element);

//question 8
var liCount = document.getElementsByTagName("li").length;
