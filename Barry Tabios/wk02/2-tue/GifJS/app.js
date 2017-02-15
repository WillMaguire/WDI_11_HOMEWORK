console.log('JAVASCRIPT - APP');

var currentLeft = 0;

var poop = function() {
  document.getElementsByTagName('body')[0].style.backgroundColor= 'darkolivegreen';
};

var flush = function() {
    document.getElementsByTagName('body')[0].style.backgroundColor= 'white';
};

var flushBtn = document.getElementById('flush-btn');
var poopBtn = document.getElementById('poop-btn');
var goBtn = document.getElementById('go-btn');
var goFasterBtn = document.getElementById('go-faster-btn');
var stopBtn = document.getElementById('stop-btn');
//console.log(flushBtn);
var stopGifGo;
var stopGifFaster;
var reverseStop;


poopBtn.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);

// mintcream

var movePixel = 10; // this will be used to move the image


var marioWalk= function(){
  // dom api allows to access the document
  var img = document.getElementsByTagName('img')[0];
//  console.log(img);
  var currentLeft = parseInt(img.style.left);
//  console.log(currentLeft);
  img.style.left = currentLeft + movePixel + 'px';
  if(currentLeft > (window.innerWidth - img.width)){
    //img.style.left = '0px';
    stop();
  //  img.style.rotate(180deg);
  //  img.style.transform = scaleX(-1);
    img.style.transform = "scaleX(-1)";
  //  /Users/Barry/wdi11/code_alongs/02-web/toiletjs/sonic.gif
    walkBack();
    //img.style.left = window.innerWidth;
  };
    console.log(document.width)
};


var go = function() {
  stop();
  stopGifGo = setInterval(marioWalk, 300);
  console.log(stopGifGo);
};

var faster = function(){
  stop();
  stopGifFaster = setInterval(marioWalk, 30);
  console.log(stopGifFaster);
};

var stop = function(){
 clearInterval(stopGifGo);
 clearInterval(stopGifFaster);
 clearInterval(reverseStop);
};

var marioWalkBack = function(){
    //stop();
    console.log('mario walk backwards');
    var img = document.getElementsByTagName('img')[0]
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft - movePixel + 'px';
    if(currentLeft < 0){//window.innerWidth //-img.width){
      //img.style.left = '0px';img.style.transform = "scaleX(-1)""
      stop();
      img.style.transform = "scaleX(+1)";
  //    img.currentSrc = document.getElementById('image').src='sonic.gif';
    //  console.log('test when walk back');
      faster();
      //img.style.left = window.innerWidth;
    };
};

var walkBack = function(){
  reverseStop = setInterval(marioWalkBack, 30);
};

goBtn.addEventListener('click', go);
goFasterBtn.addEventListener('click', faster);
stopBtn.addEventListener('click', stop);

// timers
// setTimeOut(fx, milliseconds) =>
// setInterval (fn, interval) =>
// learn how to know how to go at the end of page - property called window
