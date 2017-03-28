

var list = [1,2,3,4,5];
var shuffle = function(list){

  var i = 0
     , j = 0
     , temp = null

  for (i = list.length - 1; i > 0; i -= 1) {
   j = Math.floor(Math.random() * (i + 1))
   temp = list[i]
   list[i] = list[j]
   list[j] = temp
  };
return list;
};



var Fullslack = {
  VERSION: "1.0",
  shuffle: shuffle
};
debugger
