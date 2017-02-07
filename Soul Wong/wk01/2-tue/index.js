var userName = prompt("Please enter a username","username");
console.log("Hello "+ userName);
var menu=["steak","fruit salad","tofurkey","pork chops"];
var dinnerChoice = (prompt("What would you like to eat for Dinner?",menu)).toLowerCase();
console.log("Your dinner choice is " +dinnerChoice);
switch(dinnerChoice){
	case "fruit salad":
	case "tofurkey":
		console.log("This cuisine is vegan friendly.");
  	break;
  case "pork chops":
  case "steak":
  	console.log("Vegans Beware!");
    break;
  default:
 		console.log("This cuisine is not defined in program");
}