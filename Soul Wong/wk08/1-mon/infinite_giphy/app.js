var offset_value = 0;
$('.searchButton').on('click',function(){
  searchIt();
});


function searchIt(){
  var search_term = $('.search').val();
  var $result_body = $('.results_container');
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    data: {q: search_term,api_key: 'dc6zaTOxFJmzC',limit:10,offset:offset_value},
    }).done(function(data) {
      data["data"].forEach(function(element) {
      $('<img>',{'src':element['images']['downsized']['url']}).appendTo($result_body);
      offset_value+=1;
    });

  })

}


// var last_known_scroll_position = 0;
// var current_position = 0;
// var ticking = false;
//
// function doSomething(scroll_pos) {
//   console.log(scroll_pos);
//
//
//   // do something with the scroll position
// }
//
// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
//
//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });
//   }
//   ticking = true;
// });

$(document).scroll(function(){

  //get the browser window height
  var windowHeight = $(window).height();
  //get the current location
  var windowLocation = $(window).scrollTop();
  //get the total document height(e.g. bottom of document)
  var documentHeight = $(document).height();
  //check if current window has reached bottom of document
  if (windowHeight+windowLocation === documentHeight || windowHeight+windowLocation > documentHeight){
    searchIt();
  }
});
