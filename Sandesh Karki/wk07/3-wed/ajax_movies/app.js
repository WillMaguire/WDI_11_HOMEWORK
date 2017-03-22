$movie = $('input').val();


$.ajax({
      url: 'http://www.omdbapi.com/?',
      data: { s: $movie },
      method: 'GET'
    }).done(function(data){
      console.log(data);
      // console.log(data["Search"])
      // arr = data["Search"];

      data.Search.forEach(function(movie){
      // console.log(movie.Title);
      $('.result').append('<h3> Title: ' + movie.Title+ '</h3>');

      });
    });

    
