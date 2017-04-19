

//Question #1
  document.getElementsByTagName('h1')[1]; // Gets the 2nd h1 element

// //Question #2
  document.getElementsByTagName('h1')[1].textContent = "Friend"; // sets the content to "Friend"

// // Question #3
  document.getElementsByTagName('body')[0].classList.remove('name');
  document.getElementsByTagName('body')[0].classList.add('description');
//   // or
  document.querySelector('body').classList.remove('name');
  document.querySelector('body').classList.add('description');

//Question #4
  var settingsParent = document.querySelector('#settings').parentElement;
  settingsParent.removeChild(document.querySelector('#settings'));

//Question #5
  var btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    if (btn.parentElement) {
      btn.parentElement.style.backgroundColor = "red";
    }
  });

//Question #6
  var favouriteColor = document.querySelector('#favCol').value;

//Question #7
  var paragraph = document.createElement('p');
  document.querySelector('.my-articles').appendChild(paragraph);

//Question #8
  var numberOfChildren = document.getElementsByTagName("ul")[0].childElementCount;
