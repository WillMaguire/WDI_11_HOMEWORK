function cardsIndex() {

  var apiUrl = '/api/cards';
  var indexTemplate = Handlebars.compile($('#index-template').html());
  var cardTemplate = Handlebars.compile($('#card-template').html());

  $.ajax({ url: apiUrl }).done(renderIndex);

  function renderIndex(cards) {
      var html = indexTemplate();
      $('#app').html(html);

    cards.forEach(function(card){
      var html = cardTemplate(card);
      $('.wrapper').append(html);
    });

    $('.wrapper').on('click', '.delete-btn', deleteCard);
    // $('.wrapper').on('click' '.edit-action', editCard);
    // $('.new-card-form').on('submit', createCard);

    function deleteCard(event) {
      var id = $(event.target).closest('.card').data('id')

      $.ajax({
        url: '/api/cards/' + id,
        method: 'delete'
      }).done(function() {
        $( event.target ).closest( '.card' ).fadeOut(500, function () {
          $( event.target ).closest( '.card' ).remove()
         });
      });
    };
  };
};

$(document).ready(function() {
cardsIndex();
});
//
//
// $('.new-card-btn').on('click',function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: '/api/cards',
//     method: 'post',
//     data: {
//       name: $('.new-card-name').val(),
//       image_url: $('.new-card-image').val()
//     }
//   }).done(function(card) {
//     var source = $('#card-template').html();  //gets the template
//     var template = Handlebars.compile(source)  //turns template string
//     var html = template(card)
//     $('.wrapper').append(html)
//   });
// });
//
// $.ajax({
//   url: '/api/cards'
// }).done(function(res){
//   var shuffledCards = _.shuffle(res);
//
//   shuffledCards.forEach(function(card) {
//
//     var source = $('#card-template').html();  //gets the template
//     var template = Handlebars.compile(source)  //turns template string
//     var html = template(card)
//     $('.wrapper').append(html)
//
//   }); //closing for each
//
// });//ajax end
//
// })
// $('.wrapper').on('click', '.delete-btn',  function(event){
// console.log('deleting')
// var id = $(event.target).closest('.card').data('id')
// $.ajax({
//   url: '/api/cards/' + id,
//   method: 'delete'
// }).done(function(){
//   $( event.target ).closest( '.card' ).fadeOut(500, function () {
//     $( event.target ).closest( '.card' ).remove()
//  });
//
// }); //delete done end
//
// });  //delete end


// $('.wrapper').on('click', '.edit-btn',  function(event){
//   var span = document.getElementsByClassName("close")[0];
//   var modal = document.getElementById('edit-modal');
//
//   var id = $(event.target).closest('.card').data('id');
//   var card = $( event.target ).closest( '.card' );
//
//   modal.style.display = "block";
//
//   span.onclick = function() {
//       modal.style.display = "none";
//   }
//
//   $.ajax({
//     url: '/api/cards/' + id,
//     method: 'put',
//     data: {
//       name: .name,
//       image_url: Card.image_url
//     }
//   }).done(function(card){
// // $('.edit-card-name').val(),
// // $('.edit-card-image').val()
//     console.log(card)
//
//
//    });
//
//  }); //update done end
//
// });  //update end
