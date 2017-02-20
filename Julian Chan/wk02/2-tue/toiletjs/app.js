console.log('please flush');

var body = document.getElementsByTagName('body')[0];
var poopBtn = document.getElementById('poop-btn');
var flushBtn = document.getElementById('flush-btn');

var poop = function() {
  body.style.backgroundColor = 'darkolivegreen';
}

var flush = function() {
  body.style.backgroundColor = 'mintcream';
}

poopBtn.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);

// dancing cat/zombie
var movePixel = 10;
var intervalMilliseconds = 800;
var timerId = null;

var zombieWalk = function() {
  var hasReachedWindowEdge = function() {
    return (currentLeft + imgWidth >= innerWidth && movePixel > 0) ||
           (currentLeft <= 0 && movePixel < 0);
  }

  var reverseDirection = function() {
    movePixel *= -1;
  }

  // dom api allows to access the dom
  var images = document.getElementsByTagName('img');
  var img = images[0];
  var imgWidth = parseInt(img.style.width);
  var currentLeft = parseInt(img.style.left);

  img.style.left = Math.min(currentLeft + movePixel, innerWidth - imgWidth) + 'px';

  if (hasReachedWindowEdge()) {
    reverseDirection();
  }
}

var walkLoop = function() {
  zombieWalk();
  timerId = setTimeout(walkLoop, intervalMilliseconds);
}

var speedUp = function() {
  var minIntervalMilliseconds = 10;
  var intervalDelta = (intervalMilliseconds - 1200) / 8;

  intervalMilliseconds = Math.max(minIntervalMilliseconds, intervalMilliseconds + intervalDelta);
}

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
fasterBtn.addEventListener('click', function() { if (timerId !== null) { speedUp(); } });
stopBtn.addEventListener('click', function() { clearTimeout(timerId); timerId = null; })
