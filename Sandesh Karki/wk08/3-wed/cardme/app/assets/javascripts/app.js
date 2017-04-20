$(document).ready(function() {


  // creating new card
  $('.new-card-form').on('submit', function(event){
    event.preventDefault(); //prevent to refresh...form
    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
        name: $('.new-card-name').val(),
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card){
      var source = $('#card-template').html();   // to grap the templet string
      var template = Handlebars.compile(source); //turn template string into a function
      var html = template(card) //template and data merge together...
      $('.wrapper').append(html)
    })
  })


// list of all cards
  $.ajax({
    url: '/api/cards'
  }).done(function(res){
    var shuffledCards = _.shuffle(res);

    shuffledCards.forEach(function(card){
      var source = $('#card-template').html();   // to grap the templet string
      var template = Handlebars.compile(source); //turn template string into a function
      var html = template(card) //template and data merge together...
      $('.wrapper').append(html)
    });
  });


// delete cards
  $('.wrapper').on('click', '.delete-action', function(event){
    var id =  $(event.target).closest('.card').data('id');
    // data('id') same attr
    $.ajax({
      url:'/api/cards/' + id,
      method: 'delete'
    }).done(function(){
      //remove card from dom
      // $('.card[data-id=' + card.id + ']').fadeOut(500, function() {
      // $(this).remove();
      //    OR
      $(event.target).closest('.card').fadeOut(500, function(){
        $(event.target).closest('.card').remove();
      });
    });
  });


// edit card
  $('.wrapper').on('click', '.edit-action', function(event){
    event.preventDefault();

    var id = $(event.target).closest('.card').data('id');
    $('.ultimate-wrapper').remove();

    var source = $('#edit-template').html(); // to grap the templet string
    var template = Handlebars.compile(source); //turn template string into a function
    var html = template() //template and data merge together...
    $('body').append(html)

    $('.edit-card-action').on('click', function(event){
      event.preventDefault(); //prevent to refresh...form

    $.ajax({
      url:'/api/cards/' + id,
      data: {
        name: $('.edit-card-name').val(),
        image_url: $('.edit-card-image_url').val()
      },
      method: 'put'
    }).done(function(cards){
        $('body').append('<div>').addClass('ultimate-wrapper');
        $('.ultimate-wrapper').append('<div>').addClass('wrapper');
        cards.forEach(function(card){
          var source = $('#card-template').html();   // to grap the templet string
          var template = Handlebars.compile(source); //turn template string into a function
          var html = template(card) //template and data merge together...
          $('.wrapper').append(html)
        });
      });
    });
  });
});//doc window line1
