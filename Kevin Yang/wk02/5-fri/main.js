console.log('connected to web')

function printRan(min, max) {
     Ints = "";
    for (var i = min; i <= max; i++) {
            Ints += i + ',';

        if (i % 3 === 0){
            Ints = "Cake";
          } else if(+Ints % 5 === 0){
            Ints = "Pudding";
          } else if (+Ints % 3 === 0 && Ints % 5 === 0){
            Ints = "CakePudding";
          }
        }

    return Ints;
    var result = Ints;
}

 console.log(printRan(1,100));
