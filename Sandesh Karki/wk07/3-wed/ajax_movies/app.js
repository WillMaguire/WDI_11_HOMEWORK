
$('button').on('click',function(){
  $movie = $('input').val();

  $.ajax({
        url: 'http://www.omdbapi.com/?',
        data: { s: $movie },
        method: 'GET'// optional as it is get by defult
      }).done(function(movies){
        console.log(movies)

        movies.Search.forEach(function(movie){

          var $title = $('<a>').attr('href', 'http://www.imdb.com/title/' + movie.imdbID).text(movie.Title).attr('target', '_blank');

          var $h2 = $('<h2>');

          $($h2).append($title);
          $(".result").append($h2);
        });
      });
});
