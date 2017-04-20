console.log('hello');

var title;

$searchBtn = $('.searchBtn');
$searchBtn.on('click', function(){
//  title = document.querySelector('.input').value;
  title = $('.input').val();
  $.ajax({
    url: 'http://omdbapi.com/?',
    data:{ s: title},
    method: 'get'
  }).done(function(data){
  //  result1 = data;
    resultArray = data.Search; // or you can do data["Search"];

    console.log(result);
    // $("<h2>") - create new element
    // $("form").append(title)  - append to form tag
  });
});

//
// Will Miller code
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
//
//
//     })
//   });
// });
