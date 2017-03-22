console.log('the ultimate search engine for netflix and chill');

var $searchBtn = $('button');
var $result = $('.result')

$searchBtn.on('click', function() {

  var $searchInput = $('input');
  var title = $searchInput.val()

  $.ajax({
    url: "http://www.omdbapi.com/?s=" + title,
    method: 'get'
  }).done(function(list) {
    movies = list['Search']
    for (var i = 0; i < movies.length; i++) {
      $link = $('<a>');
      $link.attr('href', "http://www.imdb.com/title/" + movies[i]["imdbID"] + "/?ref_=nv_sr_1");
      $movie = $('<h2>');
      $movie.text(movies[i]["Title"]);
      $link.append($movie);
      $result.append($link);
    }
  });
});
