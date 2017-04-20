// $(document).ready(function() {
//   $(".search_movie").click (function(){
//     console.log('hello');
//     var movie_title = $(".movie_title").val();
//     var url = "https://www.omdbapi.com/?s="+movie_title;
//     $.ajax({
//       url: url,
//       method: "GET"
//     }).done(function (displayed) {
//       console.log(displayed.Search);
//
//       var searchArray = displayed.Search;
//
//       searchArray.forEach(function(movie) {
//
//         var title = $("<h2>").text(movie.Title);
//         $("form").append(title);
//
//       })
//
//
//
//     })
//   });
// });
console.log('JS WORKS');

var $searchBtn = $('button');
var $searchInput = $('.movie-search');
var $result = $('.result');

$searchBtn.on('click', function() {

  $result.empty()

  var $searchInput = $('.movie-title');
  var title = $searchInput.val()

  var source = $("#movie-template").html();
  var templateFunction = Handlebars.compile(source);

  $.ajax({
    url: "http://www.omdbapi.com/?s="+title,
    method: 'get'
  }).done(function(movies) {
    // debugger
    movies.Search.forEach(function(movie) {
      html = templateFunction(movie);
      $result.append('html')
    })
  });
});
