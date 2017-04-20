
// $(document).ready(function(){
  $("button").click(function(){

    var movie_title = $(".movie-title").val();

    $.ajax({
      url: "http://omdbapi.com/?s="+movie_title,
      method: 'get'
    }).done(function(movie_list){
      var title = movie_list.Search;
      title.forEach(function(title){
        var title_movie = $("<h2>").text(title.Title);
        $(".list").append(title_movie);
      })
    })
  })
