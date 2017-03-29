$(document).ready(function(){
  loadCards();

  $('.new-card-form').on('submit',function(){
      event.preventDefault();
      $.ajax({
        url: '/api/cards',
        method: 'post',
        data: $('.new-card-form').serialize()
      }).done(function(card){
        var source = $('#card-template').html();
        var template = Handlebars.compile(source);
        var html = template( card );
        $('.wrapper').append( html );
      });
  });

  function loadCards(){
    $.ajax({
      url: '/api/cards'
    }).done(function(response){
      var shuffledCards = _.shuffle(response);
      shuffledCards.forEach(function(card){
        var source = $('#card-template').html(); //grab template string
        var template = Handlebars.compile( source );
        var html = template ( card );
        $('.wrapper').append(html);
      });
    });
  }

  $('.wrapper').on('click','.delete-action', function(){
    var $card = $(event.target).closest('.card')
    var id = $card.data('id')
    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function(){
      $card.fadeOut(500,function(){
        $(this).remove();
      });
    });
  });

  $('.wrapper').on('click','.edit-action',function(){
    $('.new-card-form').hide();
    var $card = $(event.target).closest('.card')
    var id = $card.data('id')

    $.ajax({
      url: '/api/cards/' + id,
      method: 'get'
    }).done(function(card){
      $('.wrapper').fadeOut(500,function(){
        $(this).empty();
        var source = $('#card-template').html();
        var template = Handlebars.compile( source );
        var html = template ( card );
        $('.wrapper').append(html);
        var source_form = $('#edit_form').html();
        var form_template = Handlebars.compile( source_form );
        $('.card footer').append(form_template);
      });
      $('.wrapper').on('click','.return-home',function(){
        $('.wrapper').empty();
        loadCards();
        $('.new-card-form').show();
      });
      $( ".wrapper" ).fadeIn( "slow");
    });
  });

  $('.wrapper').on('submit','.edit-card-form',function(){
    event.preventDefault()
      var $card = $(event.target).closest('.card')
      var id = $card.data('id')
      $.ajax({
        url: '/api/cards/' + id,
        method: 'patch',
        data: $('.edit-card-form').serialize()
      }).done(function(data){
          var shuffledCards = _.shuffle(data);
          $('.wrapper').empty();
          shuffledCards.forEach(function(card){
            var source = $('#card-template').html(); 
            var template = Handlebars.compile( source );
            var html = template ( card );
            $('.wrapper').append(html);
          });
        }
      );
  });

});
