console.log('connected')

$('.search-btn').click(function(){
  var title = $("input[name='search-txt']").val();

  $.ajax({
      url: '$?',
      data: { s: title },
      method: 'get'
    }).done(function(data){
      console.log(data)
      $('.result').empty();

      data['Search'].forEach(function(datum){
        var $link = $('<a>');
        $link.attr("href", "http://www.imdb.com/title/"+ datum.imdbID).text(datum.Title);
        $('.result').append($link);
      })
		});

})
