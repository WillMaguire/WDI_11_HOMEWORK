console.log('connected');

const API_KEY = 'dc6zaTOxFJmzC';

var $window = $(window);
var $document = $(document);
var $input = $('input');
var $results = $('.results');

var hasStartedSearch = false;
var scrollThrottle = false;
var scrollThrottling = false;

var limit = 100;
var offset = 0;
var chunkSize = 10;
var gifs = [];

var loadGifs = function() {
  if (gifs.length < chunkSize) {
    var oldOffset = offset;
    offset += limit;

    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search',
      data: { q: $input.val(), limit: limit, offset: oldOffset, api_key: API_KEY }
    }).done(function(results) {
      if (results.data.length === 0) {
        offset = 0;
        return;
      }

      results.data.forEach(function(result) {
        gifs.push(result.images.fixed_height.url);
      });

      renderGifs();
    });
  } else {
    renderGifs();
  }
};

var renderGifs = function() {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < chunkSize; i++) {
    var img = document.createElement('img');
    img.src = gifs.shift();
    fragment.appendChild(img);
  }

  $results.append($(fragment));
};

$('button').click(function() {
  gifs = [];
  $results.empty();
  loadGifs();
  hasStartedSearch = true;
});

$window.scroll(function() {
  if (scrollThrottle) {
    if (!scrollThrottling) {
      scrollThrottling = true;
      setTimeout(function() { scrollThrottle = false; scrollThrottling = false; }, 500);
    }
  } else if (hasStartedSearch && $window.scrollTop() + $window.height() > $document.height() * 0.8) {
    loadGifs();
    scrollThrottle = true;
  }
});
