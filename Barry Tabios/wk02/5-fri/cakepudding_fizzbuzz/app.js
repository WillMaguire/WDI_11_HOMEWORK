console.log('javascript working');

var num1 = prompt('please enter number');



if (num1 % 5 === 0 && num1 % 3 === 0){
      console.log('CakePudding');
    } else {
      if(num1 % 3 === 0){
        console.log('Cake');
      } else {
        if(num1 % 5 === 0){
        console.log('Pudding');
        };
      };
    };


console.log('next exercise');

for(var num = 0; num<100; num++){


  if (num % 5 === 0 && num % 3 === 0){
        console.log('CakePudding');
      } else {
        if(num % 3 === 0){
          console.log('Cake');
        } else {
          if(num % 5 === 0){
          console.log('Pudding');
          };
        };
  };
  console.log(num);
};
