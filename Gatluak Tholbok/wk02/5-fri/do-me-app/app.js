console.log('it works');

var firstToDO = document.querySelector('li');
var list = document.querySelector('ul');


var addClass = function(element, classname) {
  element.className += (' ' + className);
}
// <div class='one two three'></div>
// var removeClass(elem, 'two');
var removeClass = function(element, className) {
  element.className = element.className.split(' ').filter(function(item) {
  if(item !== className) {
    return true;
  }
}).join(' ');
}


// //  filter method: filter goes through all the elements
// //  ['one', 'tow', 'three'].filter(function() {
// console.log(item)
//   return true;
// })


var listItems = document.querySelector('li');
var list = document.querySelector('ul');


list.addEventListener('click', function(event) {
console.log(event.target);

if (event.target.tagName === 'LI')
 {
   event.target.className = 'completed';
 }

})

var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var userInput = document.querySelector('input').value;
  var newListItem = document.createElement('li');

  newListItem.textContent = userInput;
  list.appendChild(newListItem);
})
