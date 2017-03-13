console.log("working");

var letterCheck = function(letter){
  var array1 = ["a","e","i","o","u","l","n","r","s","t"];
  var array2 = ["d","g"];
  var array3 = ["b","c","m","p"];
  var array4 = ["f","h","v","w","y"];
  var array5 = ["k"];
  var array6 = ["j","x"];
  var array7 = ["q","z"];

  if (array1.includes(letter)){
    return 1;
  }else if(array2.includes(letter)){
    return 2;
  }else if(array3.includes(letter)){
    return 3;
  }else if(array4.includes(letter)){
    return 4;
  }else if(array5.includes(letter)){
    return 5;
  }else if(array6.includes(letter)){
    return 8;
  }else if(array7.includes(letter)){
    return 10;
  }
}

var scoreCheck = function(word){

  var wordArray = word.split("");
  var newArray = wordArray.map(letterCheck);
  var score = newArray.reduce(function(a,b){
    return a+b;
  });

  return console.log(score)
}
