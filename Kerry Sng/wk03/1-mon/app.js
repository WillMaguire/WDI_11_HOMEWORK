var newInput = document.getElementsByTagName('ul')[0].textContent
  document.write("<h1>Friend</h1>");

var elementDiv = document.getElementById('settings');
  elementDiv.remove();

var newColor = document.querySelector('.clickBtn');

newColor.addEventListener('click', function() {
  document.body.style.backgroundColor = 'purple';
})
