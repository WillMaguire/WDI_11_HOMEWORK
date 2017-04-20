
function getGyph() {

  var gyhpName = $('input').val();
  var loadMore = $('.list').children().length;
  var gyphLink = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&offset='+ loadMore +'&limit=10&q='+gyhpName;

  $.ajax({
      url: gyphLink,
      method: 'get',
    }).done(function(data) {
      console.log(data);

    var results = data['data'];
    results.forEach(function(item) {
      var item = $('<img>').attr('src', item.images.original.url);
      $('.list').append(item);
    })
  })
}
$('.searchBtn').click(function() {
  getGyph();
});

$(window).on('scroll', function() {
  if(($(this).scrollTop() + $('.search').height() + $(this).height()) >= $(document).height()) {
    getGyph();
  }
});
