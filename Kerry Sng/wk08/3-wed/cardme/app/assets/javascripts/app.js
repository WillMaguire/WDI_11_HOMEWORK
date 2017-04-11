
function cardsIndex() {
  //get data
  //use the template to render html
  //attach event handlers
  var apiUrl = '/api/cards'
  var indexFunction = Handlebars.compile($('#index-template').html());
  var cardTemplate =  Handlebars.compile($('#card-template').html());

  $.ajax({ url: apiUrl }).done(renderIndex);

  function renderIndex(cards) {

    var html = indexFunction();
    $('#app').html(html);

    cards.forEach(function(card) {
      var html = cardTemplate(card);
      $('.wrapper').append(html);
    });

    $('.wrapper').on('click', '.delete-action', deleteCard);
    // $('.wrapper').on('click', '.edit-action', editCard);
    // $('.wrapper').on('submit', createCard);

    function deleteCard(event) {
      var id = $(this).closest('.card').data('id');


      $.ajax({
        url: '/api/cards/' + id,
        method: 'delete'
      }).done(function() {

        $(event.target).closest('.card').remove();
      });
    }

  }

}

$(document).ready(function(){
  cardsIndex();

})

// $(document).ready(function() {
//   var $form = $('<form>', {
//     class: 'new-card-form',
//     action: '#'
//   });
//
//   $form.append($("<input>", {
//     type: 'text',
//     class: 'new-card-name',
//     placeholder: 'name'
//   })).append($("<input>", {
//     type: 'text',
//     class: 'new-card-image_url',
//     placeholder: 'image_url'
//   })).append($("<br>"
//   )).append($("<input>", {
//     type: 'submit',
//     id: 'submit',
//     class: 'new-card-action'
//   }));
//
//   $('.wrapper').append($form)
//
//   $('.new-card-form').on('submit', function(event) {
//     event.preventDefault();
//
//     $.ajax({
//       url: '/api/cards',
//       method: 'post',
//       data: {
//         name: $('.new-card-name').val(),
//         image_url: $('.new-card-image_url').val()
//       }
//
//     }).done(function(card) {
//
//         var source = $('#card-template').html();
//         var template = Handlebars.compile(source);
//         var html = template(card);
//         $('.wrapper').append(html);
//     });
//   });
//
//     $('.wrapper').on('click', '.delete-action', function(event) { //
//       console.log('deleting')
//       var id = $(event.target).closest('.card').data('id');
//
//       $.ajax({
//         url: '/api/cards/' + id,
//         method: 'delete'
//
//       }).done(function() {
//         // remove card from the dom
//         $(event.target).closest('.card').fadeOut(500, function(){ //can use .remove instead of fadeout
//           $(event.target).closest('.card').remove();
//         })
//
//
//     });//closing delete
//
//   });//closing ajax
//
//   $('.wrapper').on('click', '.edit-action', function(event) { //
//     // console.log('editing')
//     event.preventDefault();
//
//     var id = $(event.target).closest('.card').data('id');
//
//     $.ajax({
//       url: '/api/cards/' + id + '/edit',
//       method: 'get'
//
//     }).done(function() {
//       // edit card from the dom
//
//
//       })
//
//
//   // });//closing edit
//
// });//closing ajax
//
//     $.ajax ({
//       url: '/api/cards'
//
//     }).done(function(res) {
//       // console.log(res)
//       var shuffledCards = _.shuffle(res);
//       shuffledCards.forEach(function(card) {
//         var source = $('#card-template').html(); //grab the template string
//         var template = Handlebars.compile(source); // turn template string into funtion
//
//         var html = template(card)// html with template and data merged together
//         $('.wrapper').append(html) //append html to the dom
//
//       });
//     });
//
// });
