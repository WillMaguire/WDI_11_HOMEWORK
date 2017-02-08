console.log('Top Choices');

var top_choices = ['In & Out','Theodore Roosevelt', 'LinusTechTips', 'C#', 'AngularJS','Swift', 'meteorJS'];

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
     return NumOrder + 'st';
   }
 }

for( var i=0; i<=5; i++){
  console.log('My '+ choiceOrder(i+1)+' choice' +' is '+ top_choices[i])
}
