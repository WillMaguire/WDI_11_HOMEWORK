$("button").click(function(){

  var user_input = $(".input-gif").val();
  var url = 'http://api.giphy.com/v1/gifs/search?q='+user_input+'&limit=10&offset=0&api_key=dc6zaTOxFJmzC';

  $.ajax({
    method: 'GET',
    url: url,
  }).done(function(response){
      var gif = response.data;
      gif.forEach(function(gif_elem){
        var gif_img = gif_elem['images']['fixed_height']['url'];
        var gif_img_elem = $('<img>').attr('src', gif_img).addClass('gif');
        $(".list").append(gif_img_elem)
        console.log(gif_img);
      })
    })
});

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {

     var user_input = $(".input-gif").val();
     var url = 'http://api.giphy.com/v1/gifs/search?q='+user_input+'&limit=10&offset=10&api_key=dc6zaTOxFJmzC';

     $.ajax({
       method: 'GET',
       url: url,
     }).done(function(response){
         var gif = response.data;
         gif.forEach(function(gif_elem){
           var gif_img = gif_elem['images']['fixed_height']['url'];
           var gif_img_elem = $('<img>').attr('src', gif_img).addClass('gif');
           $(".list").append(gif_img_elem)
           console.log(gif_img);
         })
       })
   }
});
