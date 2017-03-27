$('.searchGif').click(function(event) {
  event.preventDefault();
  var input = $('.gifs').val();

  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    data: {
      q: input,
      api_key: "dc6zaTOxFJmzC",
      limit: 10
    },
    method: "get"
  }).done(function(lists) {
    debugger
    lists.data.forEach(function(item){
      var $image = $("<img>").attr("src", item.images.original.url);
      $('body').append($image);
    })
  });
});
