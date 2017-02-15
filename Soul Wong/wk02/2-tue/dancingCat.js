var movePixel = 20;
var interval = 300;
var img = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
img2.style.left = 0;
img2.style.right = 0;
img2.style.top = 0;
img2.style.bottom = 0;

img.style.left = 0;
img.style.right = 0;
img.style.transform = "none";
var escapeKey = 0;
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var catWalk = function() {
  var currentLeft = parseInt(img.style.left);
  var currentRight = parseInt(img.style.right);
  console.log(img.offsetLeft);
  if(img.offsetLeft>window.innerWidth){
    img.style.transform = 'scaleX(-1)';
  } else if(img.offsetLeft<20){
    img.style.transform = 'none';
  }

  if(img.style.transform==='scaleX(-1)'){
    img.style.left = currentLeft + (movePixel*-1) + 'px';
  }else{
    img.style.left = currentLeft + movePixel + 'px';
  }

};
var baitFly = function(){
  var chooseDirection = randomDirection();
  var choosePixels = randomPixel();
  var currentLeft = parseInt(img2.style.left);
  var currentRight = parseInt(img2.style.right);
  var currentTop = parseInt(img2.style.top);
  var currentBottom = parseInt(img2.style.bottom);

  if(chooseDirection===0){
    img2.style.left = currentLeft + choosePixels + 'px';
  }else if(chooseDirection===1){
    img2.style.right = currentRight + choosePixels + 'px';
  }else if(chooseDirection===2){
    img2.style.top = currentTop + choosePixels + 'px';
  }else{
    img2.style.bottom = currentBottom + choosePixels + 'px';
  }


};

var catDance = function(){
  escapeKey = setInterval(catWalk,interval);
  escapeKey2 = setInterval(baitFly,interval);
  console.log(escapeKey);


};

var goFaster = function(){
  movePixel += 20;
};

var stopWalk = function(){
  clearInterval(escapeKey);
  clearInterval(escapeKey2);
};

console.log("Height is "+height);
console.log("Width is " + width);
var moveBtn = document.getElementById('move-btn');
var fasterBtn = document.getElementById('faster-btn');
var stopBtn = document.getElementById('stop-btn');
fasterBtn.addEventListener('click',goFaster);
moveBtn.addEventListener('click',catDance);
stopBtn.addEventListener('click',stopWalk);
var looper;
var degrees = 0;

rotateAnimation('bait',5);
function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
}
function randomDirection(){
  var randomMove = Math.floor((Math.random())*4);
  return randomMove;
}
function randomPixel(){
  var randomPix = Math.floor((Math.random())*30);
  return randomPix;
}


console.log(randomDirection);
console.log(randomPixel);
