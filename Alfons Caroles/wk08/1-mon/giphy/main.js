function request() {
  var search = $('.words').val();
  var count = $('.content').children().length;
  var link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&offset='+ count +'&limit=10&q=' + search;
  $.ajax({
    url: link,
    method: 'get'
  }).done(function(record){
    $result = record.data;
    $result.forEach(function(datum){
      image = $('<img>').attr("src", datum.images.original.url);
      $('.content').append(image);
    })
  });
}

$('button').on('click', function(){
  request();
});

$(window).on('scroll', function() {
  if(($(this).scrollTop() + $('.search').height() + $(this).height()) >= $(document).height()) {
    request();
  }
});
