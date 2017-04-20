console.log("(js connected)");

var userLocation = prompt("What is your suburb? (Brunswick, Carlton, Toorak, CBD)");
if (userLocation == "Brunswick") {
  document.getElementById('response').innerHTML = "Some people say that Brunswick is a hipster suburb?";
} else if (userLocation == "Carlton") {
  document.getElementById('response').innerHTML = "Do you like italian food much?";
} else if (userLocation == "Toorak") {
  document.getElementById('response').innerHTML = "Ooh la la, fancy!";
} else if ( userLocation == "CBD") {
  document.getElementById('response').innerHTML = "Right in the middle of the city, huh. Not bad!";
} else {
  document.getElementById('response').innerHTML = "Sorry, I don't know that suburb. I don't get out much";
}
