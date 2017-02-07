var name= prompt("Please enter your name ");
console.log("Welcome, " + name + "!!");

var menu= ["Fruit Salad", "Tofurkey", "Pork Chops"];
var dinner= prompt ("What would you like for dinner tonite??\n " + menu);

if(dinner === menu[1]){
  console.log("This cuisine is vegan friendly.")
}else if(dinner !== menu[1] && dinner === menu[0,2]){
  console.log ("Vegan beware!!")
}else{
  console.log ("Sorry, it's not in menu")
}
