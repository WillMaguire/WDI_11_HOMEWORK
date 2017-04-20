
var QuoteItemView = Backbone.View.extend({

  template: Handlebars.compile( $('#index-template').html() ),

  events: {
    'click p': 'markAsDone'
  },

  markAsDone: function(){
    this.$el.find('p').css('text-decoration', 'line-through');
  },

  render: function(){
    // var source = $('#quote-item-template').html();
    // var template = Handlebars.compile(source);
    var html = this.template(this.model);
    this.$el.html(html);
  }

});

$.ajax({
  url: '/api/cards'
}).done(function(res){

  res.forEach(function(card){

    var view = new QuoteItemView( { model:  card  });
    view.render();
    $('#app').append(view.el);

  });

})
