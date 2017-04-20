// accepts and array
// randomly selects on elem and return that elem
// sample(arr)

// for each element inside the array you want to apply the function to it
// the function has a signature
// function(elem) {

// }
// each(arr, function)
var list = [2,4,6,8]

var sample = function(arr) {
  var max = arr.length - 1;
  var index = Math.round(Math.random()) * (0 - max) + max
  return arr[index];
}

// var array = [2,4,5,6];
// var number = array[Math.floor(Math.random()*items.length)];
// console.log(number)

var each = function(arr, func) {  //referring to the function being called on
  for (var i=0; i < arr.length; i++){
  func(arr[i]);
  }
}

var doSomething = function(x) {
  var result = x * 2;
  console.log(result);
}


var Fullslack = {
  each: each
}

Fullslack.sample = sample;
// list.each(doSomething);
each(list, doSomething);


// for (var i=0; i = array.length; i++) {
//   var
//
//   function() {
//
//   }
// }
debugger
