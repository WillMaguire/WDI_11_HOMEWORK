var CardItemView = Backbone.View.extend({

  template: Handlebars.compile($('#index-template').html() ),

  events: {
    'click .create-card-action': 'createCard',
    'click .delete-action': 'deleteCard',
    'click .edit-action': 'editCard'
  },

  createCard: function(){
    event.preventDefault();
    console.log('creating new card');

    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
        name: $('.new-card-name').val(),
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card){
      console.log(card);

      var source = $('#card-template').html();
      var template = Handlebars.compile(source);
      var html = template(card);
      $('.wrapper').append(html);
    })
  },

  deleteCard: function(){
    var id = $(this).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function(){
      $(event.target).closest('.card').remove();
    })
  },

  editCard: function(){
    $.ajax({
      url: '/api/cards/' + id,
      method: 'put'
      data: {
        name: $('.edit-card-name').val(),
        image_url: $('.edit-card-image_url').val()
      }
    }).done(function(){
      var loadUrl = "/api/cards/"
      $("#card-template").load(loadUrl);
    });
  }

  render: function() {
    var html = this.template(this.model)
    this.$el.html(html);
  }

})






// function cardIndex(){
//   //get the data
//   //user the template the render html
//   //atach event handlers
//   var apiUrl = '/api/cards';
//   var indexTemplate = Handlebars.compile($('#index-template').html());
//   var cardTemplate = Handlebars.compile($('#card-template').html());
//
//   $.ajax({url: apiUrl}).done(renderIndex);
//
//   function renderIndex(cards){
//     console.log(cards);
//
//     var html = indexTemplate();
//     $('#app').html(html);
//
//     cards.forEach(function(card){
//       var html = cardTemplate(card);
//       $('.wrapper').append(html);
//     });
//
//     $('.wrapper').on('click', '.delete-action', deleteCard)
//     $('.wrapper').on('click', '.edit-action', editCard)
//     // $('.new-card-form').on('submit',treateCard)
//
//     function deleteCard(event){
//       var id = $(this).closest('.card').data('id');
//
//       $.ajax({
//         url: '/api/cards/' + id,
//         method: 'delete'
//       }).done(function(){
//         $(event.target).closest('.card').remove();
//       })
//     }
//
//     function editCard(event){
//
//       $.ajax({
//         url: '/api/cards/' + id,
//         method: 'put'
//         data: {
//           name: $('.edit-card-name').val(),
//           image_url: $('.edit-card-image_url').val()
//         }
//       }).done(function(){
//         var loadUrl = "/api/cards/"
//         $("#card-template").load(loadUrl);
//       });
//
//     }
//
//   }
// }
//
// $(document).ready(function() {
//   cardIndex();
// })

/*
$(document).ready(function(){

  $('.new-card-form').on('submit', function(event){
    event.preventDefault();
    console.log('creating new card');

    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
        name: $('.new-card-name').val(),
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card){
      console.log(card);

      var source = $('#card-template').html();
      var template = Handlebars.compile(source);
      var html = template(card);
      $('.wrapper').append(html);
    })
  });


  $('.wrapper').on('click', '.delete-action' ,function(event){
    console.log('deleting');

    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function(){
      //remove the card from DOM
      $(event.target).closest('.card').fadeOut(500, function(){
      $(event.target).closest('.card').remove();
      });
    });
  }); //delete-action

  $.ajax({
    url: '/api/cards'

  }).done(function(res){
    var shuffleCards = _.shuffle(res);
    shuffleCards.forEach(function(item) {
      var source = $('#card-template').html();//grab the complete string
      var template = Handlebars.compile(source);//turn tmeplate string into a function
      var html = template(item);//html with tmeplate & data merged together
      $('.wrapper').append(html);
    });

  });
  console.log('moving on')

  $('.wrapper').on('click', '.edit-action', function(event){
    console.log('editing');

    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: '/api/cards/' + id,
      method: 'put'
      data: {
        name: $('.edit-card-name').val(),
        image_url: $('.edit-card-image_url').val()
      }
      }).done(function() {

      });
  })

})  */
