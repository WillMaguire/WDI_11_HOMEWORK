console.log('dom_quiz');


//Question 1
var secondElem = document.querySelectorAll('h1')[1];

//Question 2
secondElem.textContent = "Friend";

//Question 3
document.querySelectorAll('.name').className =  'description';

//Question 4
document.querySelector('#settings').remove();

//Question 5
var btn = document.querySelectorAll('button')[0];
btn.addEventListener('click',function(){
	 var btnDiv = document.querySelectorAll('div')[0];
   btnDiv.style.backgroundColor = 'red';
})

//Question 6
var favouriteColor = document.querySelectorAll('input')[0].value;

//Question 7
var para = document.createElement('p')
document.querySelector('.my-articles').appendChild(para);

//Question 8
document.querySelectorAll('li').length;
