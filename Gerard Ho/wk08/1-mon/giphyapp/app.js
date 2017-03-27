var searchWord='wierdo';
var offsetSearch = 0;
var dateLastScrolled = new Date().getTime();

function getPictures(search){
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: 'get',
    data: {
          q: searchWord,
          limit: 10,
          offset: offsetSearch,
          api_key: "dc6zaTOxFJmzC"}
  }).done(function(data){
    var length = data.data.length;
    for(var i=0;i<length;i++){
      var $picture = data.data[i].images.downsized.url
      var $img = $('<img>').attr('src',$picture);
      $('.container').append($img);
    }
  });
}
$('button').on('click',function(){
  $('.container').empty();
  searchWord = $('input').val();
  $('span').text(searchWord);
  getPictures();
})

setInterval(timer,2000);

function timer(){
  var timeNow = new Date().getTime();
  var difference = timeNow - dateLastScrolled;
  console.log(difference);
  if(difference>2000){
    difference = 0;
    scrollEvent();
  }
}

function scrollEvent(){
  console.log("FIRED");
  // $(document).scroll(function(){
    var windowHeight = $(window).height();
    var windowLocation = $(window).scrollTop();
    var documentHeight = $(document).height();
    if (windowHeight+windowLocation === documentHeight){
      dateLastScroll = new Date().getTime();
      offsetSearch += 10;
      getPictures();
    }
  // });
}
