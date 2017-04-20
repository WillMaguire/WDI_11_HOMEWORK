console.log('Its working');

$('button').on('click', function(){
  var searchTerm = $( ".searchInput" ).val();
  $.ajax({
        url: 'http://omdbapi.com/?s='+searchTerm,
        method: 'get',
        // dataType: "json"
  })
  .done( function(data) {
    var resultArray = data.Search; // Array of returned movie titles

    // iterate over array of results
    $.each( resultArray, function(index, movie){
      var h2 = $('<h2>');
      h2.append(movie.Title);

      var imdbLink = $('<a href="http://www.imdb.com/title/' + movie.imdbID +' " target="_blank" ></a>');
      imdbLink.append(h2);
      // Display the movie titles on the index page
      $('.results').append(imdbLink);
    }); // end $.each
  }); // end .done method
});

//This is needs refactoring!
