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


var each = function(list, callback1){
  for (var index=0; index<list.length; index++){
    callback1(list[index]);
  };
};


var callback1 = function(x){
  if(x > 4){
    console.log(list);
  };
};

var map = function(list,callback2){
  var newArray=[];
  for (var index=0; index<list.length; index++){
    newArray.push(callback2(list[index]));
  };
  console.log(newArray);
}
var callback2 = function(x){
  return x*3;
};

var filter = function(list, callback3){
  var newArray = [];
  for (var index=0; index<list.length; index++){
    if (callback3(list[index]) === true) {
      newArray.push(list[index]);
    };
  };
  console.log(newArray);
};

var callback3 = function(x){
  return x >= 3
};


var Fullslack = {
  VERSION: '1.0',
  shuffle: shuffle,
  each: each,
  map: map,
  filter: filter
};




debugger;
