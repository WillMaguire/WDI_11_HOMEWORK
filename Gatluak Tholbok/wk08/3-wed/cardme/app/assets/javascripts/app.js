$(document).ready(function(){
  $('.new-card-form').on('submit', function(event) {

      event.preventDefault();
      $.ajax({
        url: '/api/cards',
        method: 'post',
        data: {
          name: $('.new-card-name').val(),
          image_url: $('.new-card-image_url').val()
        }

      }).done(function(card) {
        var source = $('#card-template').html();
        var template = Handlebars.compile(source);
        var html = template(card);
        $('.wrapper').append(html);
      });

    });

    $.ajax({
      url: '/api/cards',
    }).done(function(res) {

      var shuffledCards = _.shuffle(res);

      shuffledCards.forEach(function(card) {
        var source = $('#card-template').html();
        var template = Handlebars.compile(source);
        var html = template(card);
        $('.wrapper').append(html);

      });

    $('.wrapper').on('click', '.delete-action', function(event) {

      var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: 'api/cards/'+ id,
      method: 'delete'

    }).done(function() {
      $(event.target).closest('.card').fadeOut(500, function() {
      $(event.target).closest('.card').remove();
    })
  });
});

$('.wrapper').on('click', '.edit-card-form', function(event) {

  var id = $(event.target).closest('.card').data('id');

  $.ajax({
    url: 'api/cards/' + id,
    method: 'put',
    data: {
      id: $('.edit-card-id').val(),
      name: $('.edit-card-name').val(),
      image_url: $('.edit-card-image_url').val()
    }

  })done(function(card){

    $( ".wrapper" ).empty();

    var shuffledCards = _.shuffle(card);

    shuffledCards.forEach(function(card){

      var source = $('#card-template').html();
      var cardTemplate = Handlebars.compile(source);
      var html = cardTemplate (card);
      $('.wrapper').append(html);
    });

    var source = $('#new-card-template').html();
      var cardTemplate = Handlebars.compile(source);
      var html = cardTemplate();
      $('.wrapper').append(html);
    })
  });

})
