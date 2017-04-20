console.log("movies")

$('button').on('click', function(){

  var searchTerm = $('.searchInput').val();


    $.ajax({
         url: 'http://www.omdbapi.com/?s='+searchTerm,
         method: 'get'
       }).done(function(data) {
         var searchResult = data.Search

         searchResult.forEach(function(movie){
           var movieTitle = $("<h2>").html(movie.Title);
           $(".movieResults").append(movieTitle);

         });
       });
})
