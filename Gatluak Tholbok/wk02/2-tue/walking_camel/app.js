console.log('Please flush');

// var poop = function() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
// }
//
// var poopBtn = document.getElementById('poop-btn');
// poopBtn.addEventListener('click', poop);
//
// var flush = function() {
//   document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
// }
//
// var flushBtn = document.getElementById('flushBtn');
// flushBtn.addEventListener('click', flush);


var camelWalkPixel = 20;

var walking_camel = function() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + camelWalkPixel + 'px';
  if (currentLeft > window.innerWidth -img.width) {

    stop();
    img.style.transform = "scaleX(-1)";
    goTimer();

  }
}

var stopCamel;

var goTimer = function() {
  stopCamel = setInterval(walk_back, 300);

}

var go_now = function() {
  stopCamel = setInterval(walking_camel, 300);
  console.log(stopCamel);
}

var goFaster = function () {
  stopCamel = setInterval(walking_camel)
  console.log(stopCamel);
}

var stop = function() {
  clearInterval(stopCamel);
  console.log(stopCamel);
}

var walk_back = function() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft - camelWalkPixel + 'px';
  if (currentLeft < 0) {

    stop();
    img.style.transform = "scaleX(+1)";
    go_now();
  };

};
var goBtn = document.getElementById('start_btn');
goBtn.addEventListener('click', go_now);

var stopBtn = document.getElementById('stop_btn');
stopBtn.addEventListener('click', stop);

var fasterBtn = document.getElementById('faster_btn');
fasterBtn.addEventListener('click', goFaster);





// var img = document.getElementsTagName('img');


// look up timers in javascript
// setTimeOut(fn, miliseconds) => returns a receipt which you can use to cancel the timer.
// setInterval(fnm interval) n=> use receipts to return clear or stop timers

// lookup the properties of window object properties which will be useful for the this exercise.

// setInterval(catWalk, 100) => clearInterval(1)
