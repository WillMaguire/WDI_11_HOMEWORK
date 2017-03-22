function chainingElements (data){
  var $body = $('.container')
  var $anchor = $("<a>")
  .attr('href','http://www.imdb.com/title/'+ data['imdbID'])
  .attr('target','_blank');
  var $h2 = $("<h2>")
  .text(data["Title"]);
  var $img = $("<img>")
  .attr('src',data["Poster"]);

  return $body.append($anchor.append($h2.append($img)))
}

var coolFuncToCallback = function(data) {
  console.log(data["Search"])
  var movieArray = data["Search"];
  var movieLength = movieArray.length;

  movieArray.forEach(function(each){
    chainingElements(each)
  });
}

function dataCall() {
  $('.container').empty()
  var movie = $('input').val();

  $.ajax({
    url: "http://www.omdbapi.com/?s=" + movie,
    method: 'get'
  }).done(coolFuncToCallback);
}

$('button').on('click', dataCall)
