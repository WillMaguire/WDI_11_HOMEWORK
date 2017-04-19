

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

var callback1 = function(num) {
  if (num === 5) {
      console.log('True')
    } else {
      console.log('False')
    }

}
var some = function(list, callback) {
  for (var i = 0; i < list.length; i++) {
    callback(list[i]);
  }
}

var map = function(arr) {
  var max = arr.length - 1;
  var index = Math.round(Math.random()) * (0 - max) + max;
  return arr[index];
}

var callback2 = function(num) {
  var result = list.map * 2
  console.log(result);
}




var Fullslack = {
  VERSION: "1.0",
  shuffle: shuffle,
  some: some,
  map: map
};
debugger
