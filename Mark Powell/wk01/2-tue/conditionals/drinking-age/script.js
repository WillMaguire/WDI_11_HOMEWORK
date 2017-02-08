console.log("(js connected)");


var age = prompt("What is your age?");

if (age < 18 ) {
  document.getElementById('response').innerHTML = "Sorry, you're underage and therefore cannot drink";
} else {
  document.getElementById('response').innerHTML = "Good ahead, have a drink!";
}
