var pastryPlate = document.getElementById("pantryArea");

var cakepudding = function(num){
  var pastry = document.createElement('div');
  if(num%3===0){
    pastry.innerHTML = num + " - Cake";
  }else if(num%5===0){
    pastry.innerHTML = num +  " - Pudding";
  }
  pastryPlate.appendChild(pastry);
}

for(count=1;count<101;count++){
  cakepudding(count);
}
