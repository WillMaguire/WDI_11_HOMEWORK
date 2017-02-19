console.log('connected');


for (var i = 1; i <= 100; i++) {
  if ( (i % 3 === 0) && (i % 5 === 0) ){
    console.log('CakePudding');
  } else if (i % 3 === 0) {
    console.log('Cake');
  } else if (i % 5 === 0) {
    console.log('Pudding');
  } else {
    console.log(i);
  }

}
