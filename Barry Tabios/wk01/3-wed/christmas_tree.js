var block= prompt("Please enter any single character","2");
var row = prompt( "Please enter number of rows",7);

var blocksPerRow = "";

 for(var j = 1; j<= row; j++){
   var space = '';

   for(var i = row - j; i >= 1; i--){
     space += ' ';
  }

  blocksPerRow += ' ' + block;
  
