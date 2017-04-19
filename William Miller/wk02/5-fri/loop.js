var cakePudding = function (){
  for (var i = 0; i <= 100; i++) {
    if (i%3 === 0) {console.log('cake');
  }
    if (i%5 === 0) {console.log('pudding');
  }
    if (i%3 === 0 && i%5 === 0) {console.log('cake-pudding');
  }
}

cakePudding();
