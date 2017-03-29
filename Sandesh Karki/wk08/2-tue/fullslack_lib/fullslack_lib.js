console.log('fullslack_lib')

var list = [1,2,3,4,5];
Fullslack = {};

// Fullslack.VERSION;
var version = function(){
  return '1.0'
}
Fullslack.VERSION = version();
console.log(Fullslack.VERSION);

// Returns a shuffled copy of the list
// var list = ['a','b','c','d','e']
var shuffle = function(arr1){
  var arr = [];
  for (var i = 0; i < arr1.length ; i++){
    arr.push(arr1[i]);
  }
  var shuffledArray = [];
  var numOfEle = arr.length - 1;
  while (numOfEle !== 0){
    numOfEle = arr.length - 1;
    var randIndex = Math.round(Math.random()*numOfEle);
    shuffledArray.push(arr[randIndex]);
    arr.splice(randIndex, 1);
  }
  return shuffledArray;
}
Fullslack.shuffle = shuffle;
console.log(Fullslack.shuffle(list));


//the each() method executes a provided function once per array element.

var singleArguFunc = function(x){
  console.log(x);
}
var each = function(arr, callback){
  for(var i = 0 ; i < arr.length ; i++){
    singleArguFunc(arr[i]);
  }
}
Fullslack.each = each;
console.log(Fullslack.each(list, singleArguFunc));


//Produces a new array of values by mapping each value in list through a transformation function

var doubleNum = function(num){
  return num*2;
}

var map =  function(arr, callback){
  var transformation = [];
  for(i = 0 ; i < arr.length ; i++){
    transformation.push(callback(arr[i]));
  }
  return transformation;
}
Fullslack.map = map;
console.log(Fullslack.map(list,doubleNum));

//Looks through each value in the list, returning an array of all the values that pass a truth test

var graterThan = function(num){
  return num > 3;
}

var filter = function(arr, callback){
  var testPassed = [];
  for(var i = 0; i < arr.length ; i++){
    if(callback(arr[i])){
      testPassed.push(arr[i])
    }
  }
  return testPassed;
}

Fullslack.filter = filter;
console.log(Fullslack.filter(list, graterThan));
