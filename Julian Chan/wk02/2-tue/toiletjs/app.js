console.log('please flush');

var poopBtn = document.getElementById('poop-btn');
var flushBtn = document.getElementById('flush-btn');

var poop = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}

var flush = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'mintcream';
}

poopBtn.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);

// dancing cat/zombie
var movePixel = 10;
// var reboundPixel = 20;
var intervalMilliseconds = 800;
var minIntervalMilliseconds = 10;
var intervalDelta = function() { return (intervalMilliseconds - 1200) / 8; };
var timerId = null;

var zombieWalk = function() {
  // dom api allows to access the dom
  var images = document.getElementsByTagName('img');
  var img = images[0];
  // var effect = images[1];
  var imgWidth = parseInt(img.style.width);
  var currentLeft = parseInt(img.style.left);
  img.style.left = Math.min(currentLeft + movePixel, innerWidth - imgWidth) + 'px';
  // if (currentLeft + imgWidth >= innerWidth) {
  //   img.style.left = currentLeft - reboundPixel + 'px';
  //   flicker(effect);
  // }
  if (currentLeft + imgWidth >= innerWidth && movePixel > 0) {
    movePixel *= -1;
  } else if (currentLeft <= 0 && movePixel < 0) {
    movePixel *= -1;
  }
}

var walkLoop = function() {
  zombieWalk();
  timerId = setTimeout(walkLoop, intervalMilliseconds);
}

// var flicker = function(element) {
//   element.style.visibility = 'visible';
//   setTimeout(function() { element.style.visibility = 'hidden'; }, intervalMilliseconds);
// }

// one function to start
// one function to stop

// timers
// setTimeout(fn, milliseconds)
// setInterval(fn, interval) => use the receipt to cancel the timer with clearInterval

// window object properties will be useful

var startBtn = document.getElementById('start-btn');
var fasterBtn = document.getElementById('gofaster-btn');
var stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click', function() { if (timerId === null) { walkLoop(); } });
fasterBtn.addEventListener('click', function() { intervalMilliseconds = Math.max(minIntervalMilliseconds, intervalMilliseconds + intervalDelta()); });
stopBtn.addEventListener('click', function() { clearTimeout(timerId); timerId = null; })
