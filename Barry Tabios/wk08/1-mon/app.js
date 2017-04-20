console.log('hello');


$searchBtn = $('.searchBtn');
$searchBtn.on('click', function(){
  $input = $('.search').val();
  // input = document.querySelector('.search').value;
  // url = 'http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=dc6zaTOxFJmzC'

  $.ajax({
     url: 'http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC',
     data: {q: $input, offset: 0, limit: 10},
     method: 'get',
  }).done(function(result){
    gifs = result.data // data is the object name
    gifs.forEach(function(gif){
      NewElement = $('<img>').attr("src", gif.images.downsized.url);
      NewElement.appendTo('.container');
    });

  });

});

offsetValue = 10;

$(window).scroll(function() {
// window.addEventListener('scroll', function() {
    if ($(window).height() + $(document).scrollTop() === $(document).height()){
      $.ajax({
         url: 'http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC',
         data: {q: $input, offset: offsetValue, limit: 10},
         method: 'get',
      }).done(function(result){
        gifs = result.data // data is the object name
        gifs.forEach(function(gif){
          NewElement = $('<img>').attr("src", gif.images.downsized.url);
          NewElement.appendTo('.container');
        });
        offsetValue += 10;
      });
    };
});
