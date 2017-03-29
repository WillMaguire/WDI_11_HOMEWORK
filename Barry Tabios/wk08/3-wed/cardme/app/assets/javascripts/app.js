console.log("i'm ready ");

$(document).ready(function(){
  $('.new-card-form').on('submit', function(event) {
   event.preventDefault();
   console.log('new');
   $.ajax({
     url:  '/api/cards',
     method: 'post',
     data: { name: $('.new-card-name').val(),
             image_url: $('.new-card-image_url').val()
           }
   }).done(function(card){
     console.log('done getting the cards');
     var source = $('#card-template').html(); // gran the template string
     var template = Handlebars.compile(source); // turn template string into a function
     var html = template(card); // html with template merged together
     $('.wrapper').append(html);
   });
  });

  $.ajax({
    url:'/api/cards' //do not need http: because it is the same computer
  }).done(function(res){
    var shuffleCards = _.shuffle(res);

    shuffleCards.forEach(function(card){
      console.log('done getting the cards');
      var source = $('#card-template').html(); // gran the template string
      var template = Handlebars.compile(source); // turn template string into a function
      var html = template(card); // html with template merged together
      $('.wrapper').append(html);
    }); // ajax

    $('.delete-action').on('click',function(event){
      console.log('deleting');
      var id = $(event.target).closest('.card').data('id');

      $.ajax({
        url: '/api/cards/' + id,
        method: 'delete'

      }).done(function(){
        $(event.target).closest('.card').fadeOut(500, function() {
          $(event.target).closest('.card').remove();
        });

      });
    });
  });

  $('.wrapper').on('click', '.delete-action', function(event){
    console.log('deleting');
    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'

    }).done(function(){
      $(event.target).closest('.card').fadeOut(500, function() {
        $(event.target).closest('.card').remove();
      });

    });
  });

  $('.wrapper').on('click', '.edit-action', function(event){
    console.log('editing');
    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: '/api/cards/' + id,
      method: 'get'
    }).done(function(card){
      console.log('now editing...');
      $('.wrapper').remove();
      var source = $('#edit-template').html();
      var template = Handlebars.compile(source);
      var html = template(card)
      $('body').append(html);

      // $('<form>').appendTo($('body'));
      // $('<input>').addClass('edit-card-name').appendTo($('body form'));
      // $('<label>').text('name').appendTo($('body form'));
      // $('<input>').addClass('edit-card-image_url').appendTo($('body form'));
      // $('<label>').text('image_url').appendTo($('body form'));
      // $('<button>').text('submit').appendTo($('body form'));
      // $('<div>').addClass('card').attr('data-id', '{{id}}').appendTo($('body'));
      // $('<header>').addClass('content').appendTo($('body .card'));
      // $('<div>').text('{{name}}').appendTo($('body .card header'));
      // $('<div>').addClass('image').appendTo($('body'));
      // $('<img>').attr("src", "{{image_url}}").appendTo('body .image');
      //
      //
      // var source = $('#edit-template').html(); // gran the template string
      // var template = Handlebars.compile(source); // turn template string into a function
      // var html = template(card); // html with template merged together
      // $('body').append(html);


      // $('<div>').addClass('card').setAttribute('data-fruit','{{id}}').appendTo($('body'));


    });
  });



});


  //
  // console.log('moving on' );
  // event listener not working becuase Ajax is continiously working, it is not done
  // so put inside of done function.
