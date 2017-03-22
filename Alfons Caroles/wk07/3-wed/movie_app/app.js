
var $button = $('button');
var result = null;

$button.on('click', function(){
  var titleSearch = $('.title').val();
  $.ajax({
    url: 'http://www.omdbapi.com/',
    data: { s: titleSearch },
    method: 'get'
  }).done(function(data){
    result = data.Search;
    generateList(result);
  });
})

var generateList = function() {
  $('h2').detach();
  var $body = $('body');
  for (index = 0; index < result.length; index++) {
    var burl = 'http://www.imdb.com/title/' + result[index].imdbID;
    var title = result[index].Title;
    $body.append('<h2><a href="'+ burl +'">' + title + '</a></h2>');
  }
}
