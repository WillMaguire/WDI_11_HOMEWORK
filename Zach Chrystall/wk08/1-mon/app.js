
var currentOffset = 0;
var currentSearch
var docHeight = $(document).height();
var previousCallTime = new Date().getTime();
var reloadAboveBottom = 50;

$('.search-btn').on('click', function() {
  $('.gifs').empty();
  currentSearch = "search?q=" +  $('.search').val().split(' ').join('+');
  getGifs(currentSearch, 0);
  resetDocHeight();
});

$('.trending').on('click', function() {
  $('.gifs').empty();
  currentSearch = "trending?";
  getGifs(currentSearch, 0);
  resetDocHeight();
});

var resetDocHeight = function() {
  docHeight = $(document).height();
}


var getGifs = function(searchTerm=currentSearch, offset) {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/" + currentSearch + "&limit=10&offset=" + offset + "&api_key=dc6zaTOxFJmzC",
    method: 'get'
  }).done(function(list) {
    for (var i = 0; i < list.data.length; i++) {
      $('<img>').attr('src', list.data[i].images.fixed_width.url).appendTo('.gifs')
    }
  });
};

var throttle = function(delay) {
  console.log('s');
  var now = new Date().getTime();
  if (now - previousCallTime > delay) {
    console.log('t');
    resetDocHeight();
    currentOffset += 10;
    getGifs(currentSearch, currentOffset);
    previousCallTime = now;
  }

};

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > docHeight - reloadAboveBottom) {
    throttle(300);
  }
});
