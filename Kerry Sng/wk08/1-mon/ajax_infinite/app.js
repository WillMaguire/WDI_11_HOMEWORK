$('.search-btn').click(function(event) {
  event.preventDefault();
  var inputText = $('.search-name').val();

  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    data: {
      q: inputText,
      api_key: "dc6zaTOxFJmzC",
      limit: 10
    },
    method: "GET"
  }).done(function(results) {
    results.data.forEach(function(item) {
      var $image = $("<img>").attr("src", item.images.original.url);
      $('body').append($image);
    })
  });
});
