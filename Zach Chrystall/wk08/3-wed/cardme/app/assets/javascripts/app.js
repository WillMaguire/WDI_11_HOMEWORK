$(document).ready(function() {

  var source = $("#card-template").html();
  var templateFunction = Handlebars.compile(source);
  var $wrapper = $('.wrapper');

  var updateSource = $("#update-card-template").html();
  var updateTemplateFunction = Handlebars.compile(updateSource);

  $.ajax({
    url: '/api/cards'
  }).done(function(cards) {
    cards.forEach(function(card) {
      newCard = templateFunction(card);
      $wrapper.append(newCard);
    });
  });

  var $newCardForm = $('.new-card-form')

  $newCardForm.on('submit', function(event) {
    event.preventDefault();
    // var newCardFormData = new FormData($newCardForm);
    $.ajax({
      url: '/api/cards',
      method: 'post',
      // data: newCardFormData,
      // processData: false
      data: {
        name: $('.new-card-name').val(),
        img_url: $('.new-card-img_url').val(),
      }
    }).done(function(res) {
      newCard = templateFunction(res);
      $wrapper.append(newCard);
    });
  });

  $('.wrapper').on('click', '.delete-action', function(event) {
    console.log('deleting');
    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: 'api/cards/' + id,
      method: 'delete'
    }).done(function() {
      $(event.target).closest('.card').remove();
    });
  });

  $('.wrapper').on('click', '.edit-action', function(event) {
    console.log('editing');
    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: 'api/cards/' + id + '/edit',
      method: 'get'
    }).done(function(card) {
      $wrapper.empty();
      newCard = updateTemplateFunction(card);
      $wrapper.append(newCard);
    });
  });

  $('.wrapper').on('click', '.update-action', function(event) {
    console.log('update');
    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: 'api/cards/' + id,
      method: 'put',
      data: {
        name: $('.edit-name').val(),
        img_url: $('.edit-img_url').val()
      }
    }).done(function(cards) {
      $wrapper.empty();
      cards.forEach(function(card) {
        newCard = templateFunction(card);
        $wrapper.append(newCard);
      });
    });
  });






});
