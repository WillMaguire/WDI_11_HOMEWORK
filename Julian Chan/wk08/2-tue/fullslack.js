const VERSION = '1.0';

// helpers
var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
};

var each = function(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

// library methods
var shuffle = function(arr) {
  var res = arr.slice(), idx, temp;

  for (var endIdx = res.length - 1; endIdx > 0; endIdx--) {
    idx = randInt(0, endIdx + 1);
    temp = res[endIdx];
    res[endIdx] = res[idx];
    res[idx] = temp;
  }

  return res;
};

var some = function(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return true;
    }
  }
  return false;
};

var map = function(arr, func) {
  var res = [];

  each(arr, function(elem) {
    res.push(func(elem));
  });

  return res;
};

var filter = function(arr, predicate) {
  var res = [];

  each(arr, function(elem) {
    if (predicate(elem)) {
      res.push(elem);
    }
  });

  return res;
};

// library object
var Fullslack = {
  VERSION: VERSION,
  shuffle: shuffle,
  some: some,
  map: map,
  filter: filter
}

debugger
