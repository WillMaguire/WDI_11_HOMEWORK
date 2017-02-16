var movePixel = 10;
var img = document.getElementsByTagName('img')[0];
var screenWidth = parseInt(window.innerWidth-150);
var receipt=0;

var moveForward = function() {
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + movePixel + 'px';
  if (currentLeft > screenWidth){
    stop();
    img.style.transform = "scaleX(-1)";
    receipt = setInterval(moveBackward, 100);
  }
}

var moveBackward = function () {
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft - movePixel + 'px';
  if (currentLeft <= 0){
    stop();
    img.style.transform = "scaleX(1)";
    start();
  }
}

var start = function() {
  receipt = setInterval(moveForward, 100);
}

var stop = function() {
  clearInterval(receipt);
}

var goFaster = function() {
  stop();
  receipt = setInterval(moveForward, 50);
}


var startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', start);

var stopBtn = document.getElementById('stop-btn');
stopBtn.addEventListener('click', stop);

var goFasterBtn = document.getElementById('go_faster-btn');
goFasterBtn.addEventListener('click', goFaster);

// setTimeout(catWalk(),150);


// flushBtn.addEventListener('click', start);
// timers
//setTimeout(fn, miliseconds) ==> return receipt
//setInterval(fn, interval) ==> receipt

//to stop
//clearInterval(receipt) ==> cancel the timer
