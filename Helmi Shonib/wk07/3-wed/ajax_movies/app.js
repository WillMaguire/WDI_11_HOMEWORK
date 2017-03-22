$(document).ready(function() {
  $(".search").click(function(){
    var movie_title = $("input[name='movie_title']").to_s();
    var url = "https://www.omdpapi.com/?t="+movie_title
    $.ajax({
      url: url,
      method: "GET"
      data: "JSON"

    }).done(function () {
      
    }
  )}

)}
)
