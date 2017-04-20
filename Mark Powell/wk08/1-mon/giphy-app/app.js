var searchBtn = $('.search-btn');
var container = $('.container');
var offset = 0;

function getGifs() {
  var searchTerm = $('.search-input').val();
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q:searchTerm,
      limit: 10,
      offset: offset,
      api_key: 'dc6zaTOxFJmzC'
    }
  }).done( function(response){
    var results = response.data;
    $.each(results, function(index, gif) {
      // console.log(gif.id);

      var gifContainer = $('<div>', {
        class: 'gif-container'
      });

      var gifImg = $('<img>', {
        src: gif.images.original.url
      });

      gifContainer.append(gifImg);
      container.append(gifContainer);
    });

    offset += 10;
  });
}

$(window).on( 'scroll', function(){
  var documentHeight = $(document).height();
  var windowScrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if ( (windowScrollTop + windowHeight) > documentHeight - 10 ) {
    setTimeout( getGifs(), 3000);
  }
});

searchBtn.on('click', getGifs);
