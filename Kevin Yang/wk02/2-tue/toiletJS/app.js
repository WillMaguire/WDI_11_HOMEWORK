console.log('please flush');

var poop = function(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'darkolivegreen';
}

var flush = function (){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
}

var poopBtn = document.getElementById('poop-btn');
var flushBtn = document.getElementById('flush-btn')

poopBtn.addEventListener('click', poop);
flushBtn.addEventListener('click', flush);

//mintcream
var movePixel = 10;
var goRight = true;
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';

var catWalk = function(){
  //dom api allows to access the document

  var currentLeft = parseInt(img.style.left);

  if (currentLeft > window.innerWidth){
    img.style.transform = 'scaleX(-1)';
    goRight = false;
  } else if (currentLeft < 0){
    img.style.transform = 'scaleX(1)';
    goRight = true;
  }

  if (goRight){
    img.style.left = currentLeft + movePixel + 'px';
  } else {
    img.style.left = (currentLeft - movePixel) + 'px';
  }

    console.log('restart');
  }


var x;
var y;
var action = function() {
  if(x === undefined){
    x = setInterval(catWalk, 390);
  } else {
    return action;
  }
}

var accelerate = function (){
  if(y === undefined){
    y = setInterval(catWalk,200);
    clearInterval(x)
  } else {
    return accelerate;
  }
}

var stop = function (){
 clearInterval(y || x);
 x = undefined;
y = undefined;

  console.log('stopped');
}

document.getElementById('start-btn').addEventListener('click', action)

document.getElementById('faster-btn').addEventListener('click', accelerate)
document.getElementById('stop-btn').addEventListener('click', stop)
