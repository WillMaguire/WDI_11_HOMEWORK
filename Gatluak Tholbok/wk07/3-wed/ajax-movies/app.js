$.ajax({
	url: "http://www.omdbapi.com/?s=Batman&page=2",
	method: "GET"
	}).done(function(data) {
		var results = data.Search
		$.each(results, function(i, movieObject) {
			var movie = movieObject;
			console.log(movie.Title)

		var h2 = $(".movie_title").val();
		})
		// console.log();
});

// $('button').on('click', function() {
//   var str = $(".search_bar").val();
// })
