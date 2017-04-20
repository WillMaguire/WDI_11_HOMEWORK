console.log('Top Choices');

var top_choices = ['In & Out','Theodore Roosevelt', 'LinusTechTips', 'C#', 'AngularJS','Swift', 'meteorJS'];
// var suffix =['st','nd','rd','th']

 function choiceOrder(NumOrder){
   if (NumOrder === 1){
     return '1st';
   }
   if (NumOrder === 2){
     return '2nd';
   }
   if (NumOrder === 3){
     return '3rd';
   }
   if (NumOrder > 3){
     return NumOrder + 'th';
   }
 }

for( var i=0; i<=5; i++){
  console.log('My '+ choiceOrder(i+1)+' choice' +' is '+ top_choices[i])
}

//suggested Answer
// var colors =['tomato','peru','misty rose'];
// var suffix =['st','nd','rd','th']

// for(var index = 0; index <= colors.length, index++){
//   console.log('my #'+index+1 +' choice is '+ suffix[index] + colours[0])
// }
