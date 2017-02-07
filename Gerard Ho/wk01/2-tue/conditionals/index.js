var name = prompt("What is your name");
console.log(name);

var selection = prompt("What did you want from our menu, we have steak, fruit salad, tofurkey, pork chops");

var menu = ["steak", "fruit salad", "tofurkey", "pork chops"];

var item = menu.indexOf(selection);

if (item === 1 || item === 2){
  console.log("This cuisine is vegan friendly.");
}else{
  console.log("Vegans beware!");
}
