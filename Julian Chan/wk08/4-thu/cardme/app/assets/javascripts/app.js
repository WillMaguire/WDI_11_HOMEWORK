$(function() {
  var apiUrl = '/api/cards/';

  var CardView = Backbone.View.extend({
    template: Handlebars.compile($('#card-template').html()),

    events: {
      'click .delete-action': 'deleteCard'
    },

    deleteCard: function() {
      $.ajax({
        url: apiUrl + this.model.id,
        method: 'delete',
        context: this
      }).done(this.destroy);
    },

    render: function() {
      this.setElement(this.template(this.model));
    },

    destroy: function() {
      var that = this;
      this.$el.fadeOut(500, function() {
        that.remove();
      });
    }
  });

  function cardsIndex() {
    var indexTemplate = Handlebars.compile($('#index-template').html());

    $.ajax({ url: apiUrl }).done(renderIndex);

    function renderIndex(cards) {
      $('#app').html(indexTemplate());
      _.shuffle(cards).forEach(renderCard);
    }
  }

  function renderCard(card) {
    var view = new CardView({ model: card });
    view.render();
    $('.wrapper').append(view.el);
  }

  cardsIndex();

  $('#app').on('submit', '.new-card-form', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    $.ajax( {
      url: '/api/cards',
      method: 'post',
      data: {
        name: formData.get('name'),
        image_url: formData.get('image_url')
      }
    }).done(renderCard);
  });

  $('#app').on('click', '.edit-action', function() {
    var $card = $(this).closest('.card');
    var $editForm = $('.edit-card-form');
    var id = $card.data('id');
    var name = $card.find('.name').text();
    var image_url = $card.find('.image_url').attr('src');

    $editForm.find('input[name=id]').val(id);
    $editForm.find('input[name=name]').val(name);
    $editForm.find('input[name=image_url]').val(image_url);

    $('#app').slideUp();
    $editForm.slideDown();
  });

  $('.edit-card-form').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(event.target);

    $.ajax({
      url: apiUrl + formData.get('id'),
      method: 'put',
      data: {
        name: formData.get('name'),
        image_url: formData.get('image_url')
      }
    }).done(function(card) {
      var view = new CardView({ model: card });
      view.render();

      $('.card[data-id=' + card.id +']').replaceWith(view.el);

      $(event.target).slideUp();
      $('#app').slideDown();
    });
  });
});
