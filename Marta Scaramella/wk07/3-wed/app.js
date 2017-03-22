
var $search_btn = $('button');
    $search_btn.on('click', function(){
      var title = $('input').value
      $.ajax({
        url: 'http://omdbapi.com/?',
        data:{ s: title},
        method: 'get'
      }).done(function(data){
        $('p').text(data['Search'])
      })
    })
