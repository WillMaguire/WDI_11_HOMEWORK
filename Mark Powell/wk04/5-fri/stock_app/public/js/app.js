console.log("jQuery connected");

$('.get-quote').on('click', function(){
  $.ajax({
    type: 'GET',
    url: "http://finance.google.com/finance/info?client=ig&q=NASDAQ%3AAAPL", success: function(result){
    $('.google-finance').html(result);
  }});
});
