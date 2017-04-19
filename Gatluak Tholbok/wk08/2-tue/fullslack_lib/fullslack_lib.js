var list = [1,2,3,4,5];

var shuffle = function(arr) {
  var initialArray = arr.length, tempArray, randomArray;

  while (0 !== initialArray) {
    randomArray = Math.floor(Math.random() * initialArray);

    initialArray -= 1;

    tempArray = arr[initialArray];
    arr[initialArray] = arr[randomArray];
    arr[randomArray] = tempArray;
  }

  return arr;
}

var list = [1,2,3,4,5];

var callback = function(element, index) {
  list.every();
  return element <= 5;
}

var newArray = list.map(function(element, callback) {
  return element * 3;
});

var filter = functtion(x) {
  var filtered = list.filter(callback);
}

var Fullstack = {
  callback : callback
}

Fullstack.map(list, callback);
Fullstack.filter(list, callback);
Fullstack.shuffle(list, callback)


arr = shuffle(list);
console.log(arr);
