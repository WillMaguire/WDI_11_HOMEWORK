console.log('hello');


$searchBtn = $('.searchBtn');
$searchBtn.on('click', function(){
  input = document.querySelector('.search').value;
  // url = 'http://api.giphy.com/v1/gifs/search?q='+input+'&api_key=dc6zaTOxFJmzC'

  $.ajax({
     url: 'http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC',
     data: {q: input, offset: 0, limit: 5},
     method: 'get',
  }).done(function(result){
    gifs = result.data // data is the object name
    gifs.forEach(function(gif){
      NewElement = $('<img>').attr("src", gif.images.downsized.url);
      NewElement.appendTo('.container');
    });

    // for (var i=0; i<20; i++){
    //     console.log(gifs[i].images.downsized.url);
    //     NewElement = $('<img>').attr("src", gifs[i].images.downsized.url);
    //     NewElement.appendTo('.container');
    // };

  });

});

// title.forEach(function(title){
//   var title_movie = $("<h2>").text(title.Title);
//   $(".list").append(title_movie)
//   console.log(title)
//

//
// if ($(window).height() + $(document).scrollTop() === $(document).height()){
//   NewElement = $('<img>').attr("src", gifs[i].images.downsized.url);
//   NewElement.appendTo('.container');
//   console.log('done');
// };
