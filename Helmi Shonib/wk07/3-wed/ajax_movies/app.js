console.log('connected...');
$('.search-btn').click(function(event) {
// event.preventDefault();
var input = $('.search-movie').val();
  $.ajax({
    url: 'https://www.omdpapi.com/',
    data: {
      s: input,
    },
    method: 'get',
    dataType: 'JSON'
  }).done(function(data) {  // add data in brackets with JSON
    // $('<p>').text(data.name).appendTo('.output');
    data.Search.forEach(function(key) {  //take owner out
      key.Title; //take owner out of data
    })
  });
});  //http://www.omdbapi.com/?s=jaws
