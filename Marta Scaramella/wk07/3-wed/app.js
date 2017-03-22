console.log("marta");
    $searchBtn = $('.search-btn');
    $searchBtn.on('click', function(){
      var title = $('.input').value
      $.ajax({
        url: 'http://omdbapi.com/?',
        data:{ s: title},
        method: 'get'
      }).done(function(data){
        result = data['Search']
        title = result[1]['Title']
        console.log("marta");

      })
    })
