console.log('the ultimate search engine for netflix and chill');

var $searchBtn = $('button');
var $result = $('.result')

$searchBtn.on('click', function() {

  $result.empty()

  var $searchInput = $('input');
  var title = $searchInput.val()

  $.ajax({
    url: "http://www.omdbapi.com/?s=" + title,
    method: 'get'
  }).done(function(list) {
    movies = list['Search']
    for (var i = 0; i < movies.length; i++) {
      $card = $('<div>')
      $card.addClass('ui-card')
      $link = $('<a>');
      $link.attr('href', "http://www.imdb.com/title/" + movies[i]["imdbID"] + "/?ref_=nv_sr_1");
      $poster = $('<img>')
      $poster.attr('src', movies[i]["Poster"])
      $title = $('<h2>');
      $title.text(movies[i]["Title"]);
      $link.append($poster)
      $link.append($title);
      $card.append($link)
      $result.append($card);
    }
  });
});
