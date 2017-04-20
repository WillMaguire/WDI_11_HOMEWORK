
$('.search-btn').on('click',function(){
  movie = $('.input').val();
  console.log(movie);
  $.ajax({
        url: 'http://www.omdbapi.com/',
        data: { s: movie },
        method: 'get'// optional as it is get by defult
      }).done(function(movies){
        console.log(movies)

        movies.Search.forEach(function(movie){
          console.log('movie');
          var $title = $('<a>').attr('href', 'http://www.imdb.com/title/' + movie.imdbID).text(movie.Title).attr('target', '_blank');

          var $h2 = $('<h2>');

          $($h2).append($title);
          $(".result").append($h2);
        });
      });
});
