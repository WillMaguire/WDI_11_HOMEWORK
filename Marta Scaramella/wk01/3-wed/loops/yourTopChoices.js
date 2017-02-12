var myTopChoice = ['books', 'music', 'travel', 'food', 'ride my bike'];

// console.log('My first choice is ' + myTopChoice[0]);
// console.log('My second choice is ' + myTopChoice[1]);
// console.log('My third choice is ' + myTopChoice[2]);

for (var i = 0; i < myTopChoice.length; i++) {
  if (i === 0){
    console.log('My 1st choise is ' + myTopChoice[0]);
  }
  else if (i ===1) {
    console.log('My 2nd choise is ' + myTopChoice[1]);
  }
  else if (i ===2) {
    console.log('My 3rd choise is ' + myTopChoice[2]);
  }
  else{
    console.log('My ' + i +  'th choice is ' + myTopChoice[i]);
  }

}
