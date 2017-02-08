// Even/odd reporter

guessNumber = Math.floor(Math.random()*20);

for (var number = 0; number <= 20; number++) {
    if (number % 2 === 0) {
    console.log(number);
  }
}

// Multiplication Tables

guessNumber = Math.floor(Math.random()*10);


for (var number = 0; number <= 10; number++) {

  for (var multiplier =0; multiplier <= 10; multiplier++) {
    var result = multiplier * number;
    console.log(result);
  }
}


//for (var j = 0; j < 3; j++) {
  //console.log('j:' + j);
  //for (var i = 0; i < 5; i++) {
    //console.log('i:' + i);
  //}
//}


// Top choices

var choices = ['green','blue','black','yellow','grey','red','white'];

for (var i = 0; i <= choices.length; i++) {
    console.log('My #1' + 'choice is' +  choices[i]);
}
