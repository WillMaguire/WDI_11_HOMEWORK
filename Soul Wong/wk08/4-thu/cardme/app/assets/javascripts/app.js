// $(document).ready(function(){
//   loadCards();
//
//   $('.new-card-form').on('submit',function(){
//       event.preventDefault();
//       $.ajax({
//         url: '/api/cards',
//         method: 'post',
//         data: $('.new-card-form').serialize()
//       }).done(function(card){
//         var source = $('#card-template').html();
//         var template = Handlebars.compile(source);
//         var html = template( card );
//         $('.wrapper').append( html );
//       });
//   });
//
//   function loadCards(){
//     $.ajax({
//       url: '/api/cards'
//     }).done(function(response){
//       var shuffledCards = _.shuffle(response);
//       shuffledCards.forEach(function(card){
//         var source = $('#card-template').html(); //grab template string
//         var template = Handlebars.compile( source );
//         var html = template ( card );
//         $('.wrapper').append(html);
//       });
//     });
//   }
//
//   $('.wrapper').on('click','.delete-action', function(){
//     var $card = $(event.target).closest('.card')
//     var id = $card.data('id')
//     $.ajax({
//       url: '/api/cards/' + id,
//       method: 'delete'
//     }).done(function(){
//       $card.fadeOut(500,function(){
//         $(this).remove();
//       });
//     });
//   });
//
//   $('.wrapper').on('click','.edit-action',function(){
//     $('.new-card-form').hide();
//     var $card = $(event.target).closest('.card')
//     var id = $card.data('id')
//
//     $.ajax({
//       url: '/api/cards/' + id,
//       method: 'get'
//     }).done(function(card){
//       $('.wrapper').fadeOut(500,function(){
//         $(this).empty();
//         var source = $('#card-template').html();
//         var template = Handlebars.compile( source );
//         var html = template ( card );
//         $('.wrapper').append(html);
//         var source_form = $('#edit_form').html();
//         var form_template = Handlebars.compile( source_form );
//         $('.card footer').append(form_template);
//       });
//       $('.wrapper').on('click','.return-home',function(){
//         $('.wrapper').empty();
//         loadCards();
//         $('.new-card-form').show();
//       });
//       $( ".wrapper" ).fadeIn( "slow");
//     });
//   });
//
//   $('.wrapper').on('submit','.edit-card-form',function(){
//     event.preventDefault()
//       var $card = $(event.target).closest('.card')
//       var id = $card.data('id')
//       $.ajax({
//         url: '/api/cards/' + id,
//         method: 'patch',
//         data: $('.edit-card-form').serialize()
//       }).done(function(data){
//           var shuffledCards = _.shuffle(data);
//           $('.wrapper').empty();
//           shuffledCards.forEach(function(card){
//             var source = $('#card-template').html();
//             var template = Handlebars.compile( source );
//             var html = template ( card );
//             $('.wrapper').append(html);
//           });
//         }
//       );
//   });
//
// });
console.log('error');

var QuoteItemView = Backbone.View.extend({
  template: Handlebars.compile( $('#card-template').html() ),


  events: {
    'click .edit-action': 'edit_button',
    'click .delete-action': 'delete_button'
  },

  edit_button: function(){
    var id = this.$el.find('div').data('id');
    $.ajax({
      url:'/api/cards/' + id,
      method: 'get'
    }).done(function(data){
      console.log(data);
      });
  },

  delete_button: function(){
    console.log("delete button pressed");
  },
  render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  }

});

$.ajax({
  url: '/api/cards'
}).done(function(res){
  console.log(res);
  var pokemon_cards = res;
  pokemon_cards.forEach(function(pokemon_card){
    var view = new QuoteItemView({ model: pokemon_card });
    view.render();
    $('.wrapper').append(view.el);

  })

});
console.log('here');
