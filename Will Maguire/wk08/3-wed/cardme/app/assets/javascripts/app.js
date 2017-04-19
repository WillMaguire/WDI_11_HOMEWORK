$(document).ready(function(){

  $('.new-card-form').on('submit', function(event){
    event.preventDefault();
    console.log('create new card');
    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
            name: $('.new-card-name').val(),
            image_url: $('.new-card-image').val()
          }
    }).done(function(card){
      var source = $( '#card-template' ).html();//grab the tenplate string
      var template = Handlebars.compile(source); //turns template string into a function
      var html = template( card );
      $('.wrapper').append(html)
    })
  });

  $.ajax({
    url: '/api/cards'
  }).done(function(res) {
    res.forEach(function(card){
      var source = $( '#card-template' ).html();//grab the tenplate string
      var template = Handlebars.compile(source); //turns template string into a function
      var html = template( card );
      $('.wrapper').append(html);
    })
  });//close-ajax

  $('.wrapper').on('click', '.delete-action', function(event) {
    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function() {
      $(event.target).closest('.card').remove();
    });
  });//delete-action


  $('.wrapper').on('click', '.edit-action', function(event) {
    var id = $(event.target).closest('.card').data('id');
    event.preventDefault();
    $.ajax({
      url: 'api/cards/' + id + '/edit',
      method: 'get'
    }).done(function(card){
      var source = $( '#card-edit-template' ).html();//grab the tenplate string
      var template = Handlebars.compile(source); //turns template string into a function
      var html = template( card );
      $(event.target).closest('.card').append(html);
      $('.edit-card-form').on('submit', function(event){
        $.ajax({
          url: '/api/cards/' + id,
          method: 'put',
          data: {
            name: $('.edit-card-name').val(),
            image_url: $('.edit-card-image').val()
          }
        }).done(function(card) {
          var source = $( '#card-template' ).html();//grab the tenplate string
          var template = Handlebars.compile(source); //turns template string into a function
          var html = template( card );
          $(event.target).closest('.card').remove();
        });
      });//edit-action
    })
  });


});
