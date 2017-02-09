console.log("loops");

//The even/odd reporter

for(var i = 1; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i + " is Even");
  }else {
    console.log(i + " is Odd");
  }
}

//Multiplication Tables

for(var i = 1; i <= 10; i++){
  for(var j = 1; j <= 10; j++){
    var result = i * j;
    console.log(i + " x " + j + " = " +  result);
  }

  console.log( "=============");
}


// Your top choices
var suffix = ['st','nd', 'rd', 'th'];
var choice = ['Nepal', 'Australia' , 'Japan' , 'Singapore'];

for(var i = 0; i < choice.length ; i++){
  console.log("My " + (i+1) + suffix[i] + " choice " + choice[i]);
}
