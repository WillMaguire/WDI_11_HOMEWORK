console.log("Giphy");


var offset = 0;
var count = 1

var showGiphys = function(){

  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: $('input').val(),
      api_key: 'dc6zaTOxFJmzC',
      limit: 15,
      offset: offset
    }
  }).done(function(giphys){

    giphys.data.forEach(function(giphy){
      gifImg = giphy.images.downsized.url;
      $image = $('<img>').attr('src',gifImg );

      $('.collections').append($image);
    });
  })
  offset += 10;
  console.log('off: ' + offset)
  ;
  count++
  console.log('count: '+ count)
};

$(window).on('scroll', function(){

  var $docHeight = $(document).height();
  var $windowHeight = $(window).height();
  var $scrollTop = $(window).scrollTop();

  if($docHeight === ($windowHeight + $scrollTop)){
    setTimeout(showGiphys(),9000)
    console.log("doc: " + $docHeight)
    console.log("win: " + $windowHeight)
    console.log("top: " + $scrollTop)
  }
})

$('button').on('click', function(){
  $('img').remove();
  showGiphys();
})
