var userName = prompt("Please enter a username","username");

console.log("Hello "+ userName);

var menu=["steak","fruit salad","tofurkey","pork chops"];

var dinnerChoice = prompt("What would you like to eat for Dinner?",menu);

console.log(dinnerChoice);

if(dinnerChoice.toLowerCase()==="fruit salad" || dinnerChoice ==="tofurkey"){
	console.log("This cuisine is vegan friendly.");
}

else{
	console.log("Vegans beware!");
}


