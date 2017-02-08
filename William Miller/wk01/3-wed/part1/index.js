//Odds/evens

for (var num = 0; num <= 20; num++) {
   if (num % 2 === 0) {
     console.log(num + 'is even');
   } else {
     console.log(num + 'is odd');
   }
 }

//Multiplication table

 var multi = 9
 for (var num = 0; num <= 10; num++) {
   var result = multi * num;
   console.log(result);
 }

 for (var multi = 0; multi <= 10; multi++) {
   for (var num = 0; num <= 10; num++) {
     var result = multi * num;
     console.log(num + '*' + multi + '=' + result);
   }
 }

 //FAV THINGS

 var favFruits = ['fig', 'mango', 'banana', 'dragonfruit', 'durian']
 for (var num = 0; num <=5-1; num++){
   console.log('My' + ' ' + 'number' + ' ' +(num + 1) + ' ' + 'fruit' + ' ' + 'is' + ' ' + favFruits[num]);
}
