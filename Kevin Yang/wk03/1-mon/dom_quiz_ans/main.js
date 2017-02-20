console.log('connected to HTML');
//Q1+Q2
document.getElementsByTagName('h1')[1].innerHTML = "Friends";
//Q3
document.getElementsByTagName('div')[1].className ='description';
//Q4
 document.getElementById("settings").id="";
 //Q5
 document.getElementsByTagName('div')[4].addEventListener('click', function(){
   document.getElementsByTagName('body')[0].style.backgroundColor='red'})
//Q6
var favouriteColor = [];
document.getElementById('q6').addEventListener('click', function(){
  var userInput = document.getElementById('favCol').value
  favouriteColor.push(userInput)
});

//Q7
var list = document.querySelector('.my-articles')
var newListItem = document.createElement('p');
list.appendChild(newListItem);
document.getElementsByTagName('p')[0].id='my-articles;'

//Q8
var ul8 = document.getElementsByTagName('ul')[1];
var liArr = [];

for (var i = 0; i < ul8.childNodes.length; i++) {
	if (ul8.childNodes[i].nodeName == "LI") {
		liArr.push(ul8.childNodes[i]);
	}
}
console.log('li items no:'+ liArr.length);
