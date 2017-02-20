var firstToDo = document.querySelector('li');
var list = document.querySelector('ul');
 //<div class="one"

var addClass = function(element, className) {
    element.className += (' ' + className);
};

var removeClass = function(element,className) {
  element.className = element.className.split(' ').filter(function(item) {
      if (item !== className) {
        return true
      }
  }).join(' ');
};


//filter
// ['1','2','3'].filter(function(item){
//   console.log(item);
//   return true
// });


list.addEventListener('click', function(event) {
  // firstToDo.className = 'completed';
  if (event.target.tagName === 'LI') {
      event.target.className = 'completed'
    }
});

var button = document.querySelector('button');

button.addEventListener('click', function(newListItem) {
  var userInput = document.querySelector('input').value;
  var newListItem = document.createElement('li');
  newListItem.textContent = userInput;
  list.appendChild(newListItem)
});

var input = document.querySelector('input');

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
  var userInput = document.querySelector('input').value;
  var newListItem = document.createElement('li');
  newListItem.textContent = userInput;
  list.appendChild(newListItem)
  }
});
