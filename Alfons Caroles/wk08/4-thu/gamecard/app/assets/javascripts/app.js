$(document).ready(function(){
  var QuoteItemView = Backbone.View.extend({
template: Handlebars.compile( $('#card-template').html() ),
render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  }
});

$.ajax({
    url: '/api/cards'
  }).done(function(res){
    var shuffleCards = _.shuffle(res);
    shuffleCards.forEach(function(card) {
      var view = new QuoteItemView({ model: card });
      view.render();
      $('.contents.wrapper').append(view.el);
    })
  })});

// new card
$(document).ready(function(){
  $('.new-card-form').on('submit',function(event){
    event.preventDefault();
    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
        name: $('.new-card-name').val(),
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card){
      event.preventDefault();
      var source = $('#card-template').html(); //grab the template string
      var template = Handlebars.compile( source ); //turn template string into a function
      var html = template( card ); //html with template & data merged together
      $('.contents').append(html);
    })
  });

// delete
    $('.wrapper').on('click', '.delete-action', function(event){
      var id = $(event.target).closest('.card').data('id');

      $.ajax({
        url: '/api/cards/' + id,
        method: 'delete'
      }).done(function() {
        $(event.target).closest('.card').fadeOut(500, function(){
          $(this).remove();
        });
      });
    });
  });

  //edit
  $('.wrapper').on('click', '.edit-action', function(event){
    var id = $(event.target).closest('.card').data('id');
    var contentsWrapper = $(event.target).closest('.contents.wrapper');
    var newForm = contentsWrapper.closest('body').find('.new-card-form');
    var editForm = contentsWrapper.closest('body').find('.edit-card-form');
    contentsWrapper.html('');
    newForm.css('display', 'none');
    editForm.css('display', 'block');

  $('.edit-card-form').on('submit',function(event){
    event.preventDefault();
    var editId = id;
    $('.edit-card-form').css('display','none');
    $('.new-card-form').css('display', 'block');
    $.ajax({
      url: '/api/cards/' + id + '/edit',
      method: 'get',
      data: {
        name: $('.edit-card-name').val(),
        image_url: $('.edit-card-image_url').val()
      }
    }).done(function(card){
      $.ajax({
        url: '/api/cards'
      }).done(function(res){
        var shuffleCards = _.shuffle(res);
        shuffleCards.forEach(function(card) {
          var view = new QuoteItemView({ model: card });
          view.render();
          $('.contents.wrapper').append(view.el);
        })
    })
  });
});
});
