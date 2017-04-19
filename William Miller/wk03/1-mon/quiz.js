//1
//2

<html>
  <body>
    <div>
      <h1>Hello</h1>
    </div>

    <ul>
      <h1>Goodbye<h1>
    </ul>
  </body>
</html>

document.querySelector('h1').innerHTML = 'Friend'

//3

<html>
  <body>
    <div class='name'></div>
  </body>
</html>

document.getElementByClassName('name').className = "description";

//4

<html>
  <body>
    <div>
      <div id='settings'></div>
    </div>
  </body>
</html>

document.getElementById('settings').removeAttribute('settings')


//5

<html>
  <div>
    <button>Click me!</button>
  </div>

  <button>Dont click me</button>
</html>


document.addEventListener('click', function(event) {
    document.getElementByTagName('button')[0].style.backgroundColor = "red";
)},

//6

var = function storeColour() {
    var favouriteColor = document.getElementById("favCol").value;
}

//7
