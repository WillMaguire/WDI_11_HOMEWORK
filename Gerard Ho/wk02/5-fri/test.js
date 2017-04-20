var looper = function(){
  for(var number = 1; number<101; number++){
    
    if(number%3===0 && number%5===0){
      console.log("CakePudding");
    }else if(number%3===0){
      console.log("Cake");
    }else if(number%5===0){
      console.log("Pudding");
    }else{
      console.log(number);
    }
  }
}
