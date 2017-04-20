function cardsIndex() {
  // get the data
  // use the template the render html
  // attach event handlers

  var url =  '/api/cards';
  var templateSource = ;
  var templateFunction = Handlebars.compile($('#index-template').html());
  var cardTemplate = Handlebars.compile($('#card-template').html());

  $.ajax({ url: apiurl }).done(renderIndex);

  function renderIndex(cards) {
    console.log(cards);

    var html = templateFunction();
    $('#app').html(html);

    cards.forEach(function(card) {
      var html = cardTemplate();
      $('.wrapper').append(html);
    });

    $('.wrapper').on('click', '.delete-action', deleteCard);
    // $('.wrapper').on('click', '.edit-action', editCard);
    // $('.new-card-form').on('submit', createCard);

    function deleteCard(event) {
      var id = $(this).closest('.card').data('id');


      $ajax({
        url: '/api/cards' + id,
        method: 'delete'
      }).done(function() {

        $(event.target).closest('.card').remove();
      });
    }
  }
}
$(document).ready(function)() {
  cardsIndex();
})

/*

$(document).ready(function() {

$('.new-card-form').on('submit', function(event) {
  event.preventDefault();
  console.log('new');
  $.ajax({
    url:  '/api/cards',
    method: 'post',
    data: { name: $('.new-card-name').val(),
            image_url: $('.new-card-image_url').val()
          }
  }).done(function(card) {
      var source = $('#card-template').html(); //grap the template string
      var template = Handlebars.compile(source); //turn template string into a function
      var html = template(card); //html with template and data merged tog
      $('.wrapper').append(html);
      $(event.target).closest('.card').fadeIn(500, function() {
      $(event.target).closest('.card').append();
    })
  });
});

$.ajax({
  url:'/api/cards'
}).done(function(res) {
  var shuffledCards = _.shuffle(res);

  shuffledCards.forEach(function(card) {

    var source = $('#card-template').html(); //grap the template string
    var template = Handlebars.compile(source); //turn template string into a function
    var html = template(card); //html with template and data merged together
    // console.log(html);
    $('.wrapper').append(html);
  });


}); // ajax


  $('.wrapper').on('click', '.delete-action', function(event) {
    console.log('deleting');

    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function() {
        // remove the card from the DOM
        $(event.target).closest('.card').fadeOut(500, function() {
        $(event.target).closest('.card').remove();
        })
    });
  }); // delete-action

  $('.wrapper').on('click', '.edit-action', function(event){
    console.log('editing');
    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'get',
      data: { name: $('.new-card-name').val(),
              image_url: $('.new-card-image_url').val()
            }
    }).done(function(card) {
        $('.wrapper').remove();
        $('<form>').appendTo($('body'));
        var source = $('#card-template').html(); //grab the template string
        var template = Handlebars.compile(source); //turn template string into a function
        var html = template(card);

        $(event.target).closest('.card').fadeIn(500, function() {
        $(event.target).closest('.card').appendTo($('body'));
        })
    });

  });

});

*/
// $('.new-card-form').on('submit', function(event) {
//   event.preventDefault();
//   console.log('new');
//   $.ajax({
//     url:  '/api/cards',
//     method: 'post',
//     data: { name: $('.new-card-name').val(),
//             image_url: $('.new-card-image_url').val(
