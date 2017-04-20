// The even/odd reporter
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
    // alert(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Multiplication Tables
// for (i = 0; i <= 10; i++) {
//   console.log(i +" * " + 9 + " = " + i * 9);
// }

// Bonus
for (i = 0; i <= 10; i++) {
  for (j = 1; j <= 10; j++){
    console.log(i + " * " + j + " = "+ i * j);
  }
}

// Your Top Choices
var topChoices = ['Black','Barrack Obama', 'Lamborghini','Adidas'];
// for (i = 0; i < topChoices.length; i++) {
//   console.log('My #'+ (i+1) +' choice is ' + topChoices[i]);
// }

// Bonus
var suffix=['st','nd','rd','th'];
for (i = 0; i < topChoices.length; i++) {
  console.log('My '+ (i+1) + suffix[i] + 'choice is ' + topChoices[i]);
  // if (i == 0) {
  // } else if (i == 1){
  //   console.log('My '+ (i+1) +'nd choice is ' + topChoices[i]);
  // } else if (i == 2){
  //   console.log('My '+ (i+1) +'rd choice is ' + topChoices[i]);
  // } else {
  //   console.log('My '+ (i+1) +'th choice is ' + topChoices[i]);
  // }
}
