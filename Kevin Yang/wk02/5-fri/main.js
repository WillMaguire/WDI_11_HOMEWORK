console.log('connected to web')
var result

    for (var i = 1; i <= 100; i++) {

      if (i % 3 === 0 && i % 5 === 0){
        result = "CakePudding, ";
          } else if(i % 5 === 0){
            result = "Pudding, ";
          } else if (i % 3 === 0 ){
            result = "Cake, ";
          } else {
            result = i;
          }
          console.log(result);
      }
