
$('button').on('click', function(){
  var titleSearch = $('.title').val();
  $.ajax({
    url: 'http://www.omdbapi.com/',
    data: { s: titleSearch },
    method: 'get'
  }).done(function(data){
    result = data.Search;
    $('h2').detach();
    result.forEach(function(movie){
      var source = $('#movie-template').html(); //grab the template string
      var template = Handlebars.compile( source ); //turn template string into a function
      var html = template( movie ); //html with template & data merged together
      $('.contents').append(html);
    })
  });
})
