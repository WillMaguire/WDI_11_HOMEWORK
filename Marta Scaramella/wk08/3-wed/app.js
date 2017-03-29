
$('button').click(function(){
  var movie_title = $(".movie-title").val();
  $.ajax({
    url: "http://omdbapi.com/?s="+movie_title,
    method: 'get'
  }).done(function(movie_list){
    $('.wrapper').empty();
    var title = movie_list.Search;
    title.forEach(function(movie){
      var source = $('#movie-template').html();
      var template = Handlebars.compile( source );
      var html = template( movie );
      $('.wrapper').append(html);
    })
  })
})
