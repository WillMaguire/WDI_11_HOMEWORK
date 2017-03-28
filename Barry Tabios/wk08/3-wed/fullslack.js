console.log('JS Connected ...');

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
  console.log(list);
};


var each = function(list, callback){
  for (var index=0; index<list.length; index++){
    callback(list[index]);
  };
};




var callback = function(x){
  if()
};


var Fullslack = {
  VERSION: '1.0',
  shuffle: shuffle,
  each: each
};




debugger;
