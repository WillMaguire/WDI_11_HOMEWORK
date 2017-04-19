console.log("Super Mario!!");


  var movePixel =20;
  var animate;
  var speed = 100;
  var img = document.getElementsByTagName('img')[0];
  var direction = 'right';

  var startWalking = function() {
    if (walkBtn.addEventListener('click', startWalking)) {
      animate = setInterval(walkSlow,speed);
      } else {
        speed = 50
        animate = setInterval(walkSlow,speed);
      }
    return animate
  }

  var walkSlow = function() {
    var currentLeft = parseInt(img.style.left);

    if (currentLeft < window.innerWidth - img.width && direction === 'right')  {
      img.style.transform = "scaleX(1)";
      img.style.transition = "all 0.100s linear"
      img.style.left = currentLeft + movePixel + 'px';
      } else {
        direction = 'left';

    if (currentLeft >= 0) {
      img.style.left = currentLeft - movePixel + 'px';
      img.style.transform = "scaleX(-1)";
      img.style.transition = "all 0.100s linear"
      } else {
        direction = 'right';
      }
    }
  }

  var stop = function() {
    clearTimeout(animate);
  }


  var walkBtn = document.getElementById('walk-btn');
  walkBtn.addEventListener('click', startWalking);

  var walkFastBtn = document.getElementById('fast-btn');
  walkFastBtn.addEventListener('click', startWalking);

  var stopBtn = document.getElementById('stop-btn');
  stopBtn.addEventListener('click', stop);


// setTimeout(fn, milliseconds);
// setInterval(fn, interval)
//to top properties of window.
