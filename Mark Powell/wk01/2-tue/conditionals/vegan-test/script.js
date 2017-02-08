console.log("(js connected)");

var menuChoice = prompt("What would you like to eat tonight? (Steak, fruit salad, tofurkey, pork chops)");

if (menuChoice == "Steak" || menuChoice == "Pork Chops") {
  document.getElementById('response').innerHTML = "Vegans beware!";
} else {
    document.getElementById('response').innerHTML = "Good Choice! Enjoy";
}
