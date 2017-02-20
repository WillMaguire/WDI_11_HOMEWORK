var age = prompt("What's your age?");

var age_numb = parseInt(age, 10);

if (age_numb < '18') {
  console.log("I'm sorry, you are too young to drink alchool!");
}

else{
  console.log("What do you want drink today?");
}
