// var $stars = $( '.star' );
//
// $stars.on( 'click', function(event) {
//   var $card = $(event.target).closest('.ui_card');
//   var dishId = $card.attr('data-id');
//   $.ajax({
//       url: '/api/likes',
//       method: 'post',
//       data: { dish_id: dishId },
//   }).done(function(data){
//     $card.find('.likes_count').text(data.likes_count)
//   })
//   });

title = $(".title_search"); //added .val(),.innerHTML, .text, changed to hardcoced <span>... tired and perplexed WHAT INSAN;Y SIMPLE THING AM I NOT SEEING!?!?1
search_button = $(".search_button");
search_button.click(function(event) {
  $.ajax(

    {
    url: ("http://omdbapi.com/?s=" + title.val())//???  why did this suddenly not work??? added every sting method I could find
  }

).done(function(data) {
    data.Search.forEach(function(movie) {
    // var link = $("<a>" + {href: "http://www.imdb.com/title/" + movie.imdbID} + "</a>")//---> into reslutls div
    // var title_list = $( "<h2>" ).text( movie.Title )
    // $( '.results' ).append(title_list); ///something like that only with the actual reslutls returned... CAN"T WORK OUT THE UNDEFINED!!!  MUST KNOW
  var a = $('<a>').attr('href:', "http://www.imdb.com/title/" + movie.imdbID).text( movie.Title );
    $( '.results' ).append(a);
  })
})
});
  //   // add loop or toEach method with <a> tags around movie link and title returned by /?s= search::: return 'movie' title list
  //  data.Search.forEach(function(movie) {
  //  $link = $("<a>" + {href: "http://www.imdb.com/title/" + movie.imdbID} + "</a>")//---> into reslutls div
  // $title_list = $( movie.Title ) ///something like that only with the actual reslutls returned... CAN"T WORK OUT THE UNDEFINED!!!  MUST KNOW
  //  })
