var lists = [1,2,3,4,5];

function shuffle(arr) {
  for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}

//Map
function double(num) {
  return num * 2;
}

function map(list, callback) {
  new_array = [];
  for(var index = 0; index < list.length; index++){
    doubleNumber = callback( list[index] );
    new_array.push(doubleNumber);
  }
  return new_array;
}

function truthy(elem) {
  return elem >= 2;
}

function filter(list, callback) {
  new_array = [];
  doubleNumberArray = callback(list);
  for(var index = 0; index < list.length; index++){
    if (callback(list[index])){
      new_array.push(list[index]);
    }
  }
  return new_array;
}

function each(arr, func) {
  for(var index = 0; index < arr.length; index++){
    console.log(func( arr[index] ));
  }
}

var Fullslack = {
  each: each
}

Fullslack.each = each;
//version
Fullslack.VERSION = '1.0'
//shuffle
Fullslack.shuffle = shuffle;
//map
Fullslack.map = map;
//filter
Fullslack.filter = filter;

console.log( Fullslack.each(lists, double));
console.log( Fullslack.VERSION);
console.log( Fullslack.shuffle(lists));
console.log( Fullslack.map(lists, double) )
console.log( Fullslack.filter(lists, truthy) );
