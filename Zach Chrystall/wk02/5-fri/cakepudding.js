console.log('Cakepudding - the breakfast of champions');


var cakepudding = function() {
  for (var i = 1; i <= 100; i++) {
    if (i%3 === 0) {
      if (i%5 === 0) {
        console.log('CakePudding');
      } else {
        console.log('Cake');
      }
    } else if (i%5 === 0) {
      console.log('Pudding');
    } else {
      console.log(i);
    }
  }
}

cakepudding();
