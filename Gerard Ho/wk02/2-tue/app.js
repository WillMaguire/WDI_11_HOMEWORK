//timers
//setTimeOut(function, milliseconds)
//setInterval(function, interval) this calls this function every set intervals forever
//use clearInterval of the receipt number of the setTimeOut or setInterval.

console.log('please flush');
var poop = function(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}
var poopBtn = document.getElementById('poop-btn');
poopBtn.addEventListener('click', poop);

var flush = function(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'mintcream';
}
var flushBtn = document.getElementById('flush');
flushBtn.addEventListener('click', flush);

///////////////////////////////////////////////////////
var movePixel = -20;
var windowWidth = window.innerWidth;
var imgWidth = document.getElementsByTagName('img')[0].width;
console.log(imgWidth);
var timeLog;

var start = function(){
  //dom API allows to access the document
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left); //turn the string into a number

  if(currentLeft<=0){
    movePixel *= -1;
    console.log(movePixel);
    img.style.transition = "all 0.125s linear";
    img.style.transform = "scaleX(1)";
  }else if(currentLeft>=(windowWidth-imgWidth)){
    movePixel *= -1;
    img.style.transition = "all 0.125s linear";
    img.style.transform = "scaleX(-1)";

    console.log(movePixel);
  }
img.style.left = (currentLeft + movePixel) +'px';
}
var buttonStart = function(){
  
  timeLog = setInterval(start, 100);
}
var buttonStop = function(){
  clearInterval(timeLog);
  movePixel = 20;
}
var buttonFaster = function(){
  movePixel *= 2;
}
var startBtn = document.getElementById('start');
startBtn.addEventListener('click', buttonStart);
var stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', buttonStop);
var fasterBtn = document.getElementById('faster');
fasterBtn.addEventListener('click',buttonFaster);
