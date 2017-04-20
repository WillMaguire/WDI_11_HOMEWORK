console.log('connected to javascript');

var list =[1,2,3,4,5]

var each = function(arr, func){
  for (var i = 0; i<arr.length; i++){
    func(arr[i]);
  }
}


var Fullslack = {
  each: each,
  shuffle: shuffle,
  map: map,
  filter: filter
}

function shuffle(arr){
  for(var i = arr.length -1 ; i > 0; i--){
     var j = Math.floor(Math.random()* (i+1));
     var temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
  }
  return arr;
}

function map(arr, callback){
  var input =[]
  for (var i = 0; i<arr.length; i++){
    callback(arr[i]);
    input.push(callback(arr[i]));
  }
  console.log("[" + input + "]" )
}

function checked(elem){
  return elem + " checked";
}

function filter(arr, callback){
  var input =[]

  for (var i = 0; i<arr.length; i++){
    if (callback(arr[i]) == true) {
      input.push(arr[i]);
    }
  }
  return input;
}

function isBigEnough(value) {
  return value >= 3;
}

Fullslack.VERSION = "1.0";
console.log(Fullslack.shuffle(list));
Fullslack.map(list, checked);
console.log(Fullslack.filter(list, isBigEnough));
