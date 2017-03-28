//var list = [1,2,3,4,5];
// Fullslack.shuffle(list);
// Returns a shuffled copy of the list

var Fullslack = {
  version: '1.0',
  shuffle: shuffle,
  each: each
}

var list = [1,2,3,4,5];
var newArray = [];

var shuffle = function(list){
  var listSize = list.length;
  for (var i = 0; i < listSize; i++) {
    var max = list.length - 1;
    var index = Math.round( Math.random(Math.random())*(0 - max)) + max;
    newArray.push(list[index]);
    list.splice(index, 1);
  }
  return newArray;
}

// Looks through each value in the list, returning true if
// any of the values pass a truth test

// Fullslack.each(list, callback);

var each = function(list, func){
  for (var i = 0; i < list.length; i++) {
    func(list[i])
  }
}

var callback = function(x){
  var result = "Hello "+ x + " times!"
  console.log(result);
}

// Produces a new array of values by mapping each value in list through
// a transformation function
// Fullslack.map(list, callback);

var map = function(list, func){
  func(list);
}

var callback1 = function(x){
  var newArray = list.map(Math.square);
  console.log(newArray);
}







debugger
