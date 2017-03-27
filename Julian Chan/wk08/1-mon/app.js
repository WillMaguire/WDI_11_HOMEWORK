console.log('connected');

const API_KEY = 'dc6zaTOxFJmzC';

var $window = $(window);
var $document = $(document);
var $input = $('input');
var $results = $('.results');

var limit = 100;
var maxChunkSize = 10;

var gifs, offset, currentQuery, hasStartedSearch, scrollThrottle;

var init = function() {
  gifs = [], offset = 0, hasStartedSearch = false, scrollThrottle = false;
  $results.empty();
};

var loadGifs = function() {
  if (gifs.length < maxChunkSize) {
    var oldOffset = offset;
    offset += limit;

    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search',
      data: { q: currentQuery, limit: limit, offset: oldOffset, api_key: API_KEY }
    }).done(function(results) {
      if (results.data.length < limit) {
        offset = 0;
      }

      if (results.data.length > 0) {
        results.data.forEach(function(result) {
          gifs.push(result.images.fixed_height.url);
        });

        renderGifs();
      }
    });
  } else {
    renderGifs();
  }
};

var renderGifs = function() {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < Math.min(gifs.length, maxChunkSize); i++) {
    var img = document.createElement('img');
    img.src = gifs.shift();
    fragment.appendChild(img);
  }

  $results.append($(fragment));
};

$('button').click(function() {
  init();
  currentQuery = $input.val();
  loadGifs();
  hasStartedSearch = true;
});

$window.scroll(function() {
  if (!scrollThrottle && hasStartedSearch && $window.scrollTop() + $window.height() > $document.height() * 0.8) {
    scrollThrottle = true;
    loadGifs();
    setTimeout(function() { scrollThrottle = false; }, 750);
  }
});

init();
