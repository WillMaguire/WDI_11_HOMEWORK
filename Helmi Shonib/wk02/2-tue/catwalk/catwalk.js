var movePixel = 10;


var startBtn = function(){
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  var currentRight = parseInt(img.style.right)
  img.style.left = currentLeft + movePixel + 'px';
  img.style.right = currentRight + movePixel
    if(currentLeft > 300) {
      img.style.left = '0px';
    } else {
      img.style.right = '700px';
    }
};

//var start;
var stop;
var startWalk;
var faster;

var start = function(){
  startWalk = setInterval(startBtn, 300);
}

var faster = function(){
  go_faster = setInterval(faster, 30);
}

var stop = function(){
  clearInterval(startWalk);
  clearInterval(faster);
}

var startBtn1 = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');
var goFasterBtn = document.getElementById('faster-btn');

startBtn1.addEventListener('click',start);
goFasterBtn.addEventListener('click',faster);
stopBtn.addEventListener('click',stop);
//fasterBtn.addEventListener('click',Go Faster);

// startBtn.addEventListener('click', startBtn)


// var catwalk = function(){
  //dom api allows to access the dom
  // var img = document.getElementsByTagName('img')[0];
  // var currentLeft = parseInt(img.style.left);
  // img.style.left = currentLeft + movePixel + 'px';
  //   if(currentLeft > 300) {
  //     img.style.left = '0px';
  //   }
// }
