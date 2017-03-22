
$('button').on('click', function(){
  var titleSearch = $('.title').val();
  $.ajax({
    url: 'http://www.omdbapi.com/',
    data: { s: titleSearch },
    method: 'get'
  }).done(function(data){
    result = data.Search;
    $('h2').detach();
    $body = $('body');
    result.forEach(function(movie){
      burl = 'http://www.imdb.com/title/' + movie.imdbID;
      title = movie.Title;
      $body.append('<h2><a href="'+ burl +'" target="blank">' + title + '</a></h2>');
    })
  });
})
