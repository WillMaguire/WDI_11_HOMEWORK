Question 1:
Write the correct JavaScript to...
(1.) select the second h1 element.

var list = document.getElementByTagName("ul");

Question 2:
(2.) change the contents of what you selected above to be 'Friend'?
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

var list = document.getElementByTagName("ul");
element.innerHTML = "Friend";

Question 3: Write the correct JavaScript to change the class from 'name' to 'description' in the div element:

<html>
  <body>
    <div class='name'></div>
  </body>
</html>

document.getElementbyClassName("name").className = "description";

4.) Write the correct JavaScript to remove the element with id 'settings':

<html>
  <body>
    <div>
      <div id='settings'></div>
    </div>
  </body>
</html>

var element =  document.getElementById("settings");
element.parentNode.removeChild(element);

(5.) How would you add an event listener to the button element inside the div, so that when it is clicked the background color of the div changes to red?

      <html>
        <div class="button1">
          <button>Click me!</button>
        </div>

        <button>Dont click me</button>
      </html>

button1.addEventListener('click'.button1);
document.querySelector('.button1').style.background = 'red';

6.) Store the contents of the input box with id 'favCol' into a variable called 'favouriteColor'.

<html>
  <input type="text" id="favCol"/>
  <input type="text" id="leastFavCol"/>
  <input type="text" id="favFood"/>
</html>

var favouriteColor = document.getElementById("favCol")[0].value;

(7.) Append a paragraph tag to the div with class 'my-articles'.

<html>
  <body>
  <input type="text" id="search"/>

  <div class="my-articles">

  </div>
  </body>

</html>

document.getElementbyClassName("my-articles").appendChild();

8.) Write the necessary code to figure out how many list items are in the ul tag below:

<html>
  <body>
  <input type="text" id="search"/>

  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </body>

</html>

var liList = document.getElementById("search").getElementByTagName("li");
var li = liList.length
console.log('li');
