$(document).ready(function() {

  $(".search_btn").click(function() {

    var movieTitle = $("input").val();
    var url = "http://www.omdbapi.com/?s="+movieTitle;

    $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON"
    }).done(function(display) {
      console.log(display);

      var searchArr = display["Search"];
      console.log(searchArr);

      searchArr.forEach(function(movie) {
        console.log(movie);


        var $title = $('<h2>').text(movie.Title);
        $(".list").append($title);

      })

    })
  });
});
