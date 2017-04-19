var randInt = function(from, until) {
  return Math.floor(Math.random() * (until - from) + from);
};

var sample = function(arr) {
  return arr[randInt(0, arr.length)];
};

module.exports = {
  randInt: randInt,
  sample: sample
};
