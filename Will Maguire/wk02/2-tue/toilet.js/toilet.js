console.log("don't steal my code");

// function bang() {
//   console.log('big bang');
// }
//bang();
//setTimeout(bang, 3000);

var poop = function() {
  document.body.style.backgroundColor = 'darkolivegreen';
  console.log("playing with your phone");
}

var flush = function() {
  document.body.style.backgroundColor = 'white';
  document.body.style.backgroundImage = "url()";
}

function delay() {
  setTimeout(flush, 5000);
}
//debugger

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var goRight = true;

//ZOMBIE BEATS CAT

function catWalk() {
  var imgs = document.getElementsByTagName('img');

for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  var currentLeft = parseInt(img.style.left);

  if (goRight) {
  img.style.left = (currentLeft + movePixels) + 'px';
} // neg value to go back
 else {
      img.style.left = (currentLeft - movePixels) + 'px';
    }
if (currentLeft > (window.innerWidth-img.width)) { //resets loctation - use whole window
    img.style.transform = 'scaleX(-1)';
    goRight = false;
  } else if (currentLeft < 0) {
    img.style.transform = 'scaleX(1)';
    goRight = true;
  }
}
}


function startCatWalk() {
  clearInterval(catTimer);
  catTimer = window.setInterval(catWalk, delayMs);
}

function stopCatWalk() {
  clearInterval(catTimer);
  setTimeout(explode, 2000);
  }

function explode() {
  document.getElementById('zombie').setAttribute('src', 'http://orig08.deviantart.net/5d5f/f/2013/348/8/6/vaexplosiongrounded_by_killjerman78-d6xxhaa.gif');
  setTimeout(coolZombie, 1500);
}
function coolZombie () {
    document.getElementById('zombie').setAttribute('src', 'http://orig14.deviantart.net/60cc/f/2016/224/8/c/deviantart_sans_pagedoll_by_kyubeygirl-dadmi17.gif');
  }

//will be the growing zombie... may need new original zombie
// function zombieCometh() {
// for (var i = 0; i <= 100; i++) {
//   100}
// document.getElementById('zombie').setAttribute('height', (' + ' i ' + %');
// document.getElementById('zombie').setAttribute('width', (' + ' i ' + %');
// }



document.getElementById("start-btn").addEventListener('click', catWalk);
document.getElementById("faster-btn").addEventListener('click', startCatWalk);
document.getElementById("stop-btn").addEventListener('click', stopCatWalk);
document.getElementById("poop-btn").addEventListener('click', poop);
document.getElementById("flush-btn").addEventListener('click', delay);
