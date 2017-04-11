var CardItemView = Backbone.View.extend({

  template: Handlebars.compile($('#card-template').html() ),

    events: {
      'click .create-card-action': 'createCard',
      'click .delete-action': 'deleteCard',
      'click .edit-action': 'editCard'
    },

      createCard: function(event) {
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
            $('.app').append(html);
        });
        });


})
