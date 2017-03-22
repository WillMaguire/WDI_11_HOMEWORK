$('.btn-search').click(function() {
  var $results = $('.results');
  var title = $('input[name="title"]').val();

  $.ajax({
    url: 'http://omdbapi.com/',
    data: { s: title }
  }).done(function(data) {
    $results.empty();

    data.Search.forEach(function(result) {
      var $title = $('<a>').html($('<h2>').text(result.Title)).attr('href', 'http://www.imdb.com/title/' + result.imdbID).attr('target', '_blank');
      var $img = $('<img>').attr('src', result.Poster);
      var $card = $('<div>').addClass('card').append($title).append($img);
      $results.append($card);
    });
  });
});
