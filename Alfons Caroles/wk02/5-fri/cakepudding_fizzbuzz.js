console.log('cakepudding');

var cakePudding = function() {
  for (var number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0){
      console.log('CakePudding');
    }  else if (number % 5 === 0) {
      console.log('Pudding');
    } else if (number % 3 === 0) {
      console.log('Cake');
    } else {
      console.log(number);
    }
  }
}
