console.log('Please flush');

var poop = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}

var flush = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'mintcream';
}

var poopBtn = document.getElementById('poop-btn');
poopBtn.addEventListener('click', poop);

var flushBtn = document.getElementById('flush-btn');
flushBtn.addEventListener('click', flush)

//start cat moving across screen

var increment = 10;
var direction = 'right';
var walkingInterval;
var timeInterval = 100;
var stopped = true;



var movePixels = function() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  var currentRight = parseInt(img.style.left) + parseInt(img.width);
  var windowWidth = document.documentElement.clientWidth;
  var danceDatum = windowWidth/2 - (parseInt(img.width) / 2);
  if (currentLeft >= (danceDatum-5) && currentLeft <= (danceDatum+5)) {
    clearInterval(walkingInterval);
    stopped = true;
    img.src = "http://24.media.tumblr.com/1460f4dba0af9d9762164a2cb98fba64/tumblr_mgfwvp0M8w1s0xrbio1_500.gif";
    setTimeout(function() {
      returnImage(img)
    }, 1000);

  }
  if (direction === 'right') {
    img.style.left = currentLeft + increment + 'px';
    if (currentRight >= windowWidth) {
      direction = 'left';
      img.classList.toggle('reflection');
    }
  } else {
    img.style.left = currentLeft - increment + 'px';
    if (currentLeft <= 0) {
      direction = 'right';
      img.classList.toggle('reflection');
    }
  }
}

// timers
// setTimeout(fn, milliseconds) - calls function after set milliseconds
// setInterval(fn, milliseconds) - calls function every x milliseconds


var walk = function() {
  if (stopped) {
    timeInterval = 100;
    walkingInterval = setInterval(movePixels, timeInterval);
    stopped = false;
  }
}

var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', walk);

//stop
var stop = function() {
  clearInterval(walkingInterval);
  stopped = true;
}

var stopBtn = document.getElementById('stop-btn');
stopBtn.addEventListener('click', stop);

//speed up rate of moving accross

var speedUp = function() {
  if (stopped === false) {
    clearInterval(walkingInterval);
    timeInterval *= 0.75;
    walkingInterval = setInterval(movePixels, timeInterval);
  }
}

var speedBtn = document.getElementById('speed-btn');
speedBtn.addEventListener('click', speedUp);

var returnImage = function(image) {
  image.src = "https://68.media.tumblr.com/1cf64638208294073da7dfb411c1fc6d/tumblr_o7aai7L6Gh1so9b4uo1_500.gif";
  walkingInterval = setInterval(movePixels, timeInterval);
  stopped = false;
}
