$(document).ready(function() {
  $('.new-card-form').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    $.ajax( {
      url: '/api/cards',
      method: 'post',
      data: {
        name: formData.get('name'),
        image_url: formData.get('image_url')
      }
    }).done(function(card) {
      var source = $('#card-template').html(); // grab the template string
      var template = Handlebars.compile(source); // turn tpl string into a function
      var html = template(card); // html with template and data merged together
      // $('.wrapper').append(html);
      var $html = $(html);
      $html.hide();
      $('.wrapper').append($html);
      $html.fadeIn(500);

      // $('.delete-action').on('click', function(event) {
      //   var id = $(event.target).closest('.card').data('id');
      //
      //   $.ajax({
      //     url: '/api/cards/' + id,
      //     method: 'delete'
      //   }).done(function(card) {
      //     // remove the card from the dom
      //     $('.card[data-id=' + card.id + ']').fadeOut(500, function() {
      //       $(this).remove();
      //     });
      //   });
      // }); // delete-action
    });
  });

  $('.edit-card-form').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    $.ajax({
      url: '/api/cards/' + formData.get('id'),
      method: 'put',
      data: {
        name: formData.get('name'),
        image_url: formData.get('image_url')
      }
    }).done(function(card) {
      var source = $('#card-template').html(); // grab the template string
      var template = Handlebars.compile(source); // turn tpl string into a function

      $('.card[data-id=' + card.id +']').replaceWith(template(card));

      $(event.target).slideUp();
      $('.wrapper').slideDown();
      $('.new-card-form').slideDown();
    });
  });

  $.ajax({
    url: '/api/cards'
  }).done(function(res) {
    var shuffledCards = _.shuffle(res);

    shuffledCards.forEach(function(card) {
      var source = $('#card-template').html(); // grab the template string
      var template = Handlebars.compile(source); // turn tpl string into a function
      var html = template(card); // html with template and data merged together
      $('.wrapper').append(html);
    });

    // $('.delete-action').on('click', function(event) {
    //   var id = $(event.target).closest('.card').data('id');
    //
    //   $.ajax({
    //     url: '/api/cards/' + id,
    //     method: 'delete'
    //   }).done(function(card) {
    //     // remove the card from the dom
    //     $('.card[data-id=' + card.id + ']').fadeOut(500, function() {
    //       $(this).remove();
    //     });
    //   });
    // }); // delete-action
  }); // ajax

  $('.wrapper').on('click', '.delete-action', function(event) {
    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function(card) {
      // remove the card from the dom
      $('.card[data-id=' + card.id + ']').fadeOut(500, function() {
        $(this).remove();
      });
    });
  }); // delete-action

  $('.wrapper').on('click', '.edit-action', function(event) {
    var $card = $(event.target).closest('.card');
    var $editForm = $('.edit-card-form');
    var id = $card.data('id');
    var name = $card.find('.name').text();
    var image_url = $card.find('.image_url').attr('src');

    $editForm.find('input[name=id]').val(id);
    $editForm.find('input[name=name]').val(name);
    $editForm.find('input[name=image_url]').val(image_url);

    $('.wrapper').slideUp();
    $('.new-card-form').slideUp();
    $editForm.slideDown();
  });
});
