console.log("hello Giphy!")


var offset = 0;
var wrapper = $('.wrapper');

$('.search-button').on('click', searchGiphy);

function searchGiphy() {


  var searchInput = $('.search-input').val()
  console.log(searchInput)
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q:searchInput,
      limit: 10,
      offset: offset,
      api_key: 'dc6zaTOxFJmzC'
    }
  }).done( function(response){
    console.log(response)
    var results = response.data;
    $.each(results, function(index, gif) {

      var gifWrapper = $('<div>', {
        class: 'gif-wrapper'
      });

      var image = $('<img>', {
        class: "images",
        src: gif.images.original.url
      });

      gifWrapper.append(image);
      wrapper.append(gifWrapper);
    });

    offset += 10;
  });
}

$(window).on( 'scroll', function(){
  var documentHeight = $(document).height();
  var windowScrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();

  if ( (windowScrollTop + windowHeight) > documentHeight - 10 ) {
    setTimeout( searchGiphy(), 3000);
  }
});
