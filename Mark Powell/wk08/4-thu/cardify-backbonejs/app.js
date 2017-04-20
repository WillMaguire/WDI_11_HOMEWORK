var QuoteItemView = Backbone.View.extend({
  template: Handlebars.compile( $('#card-template').html() ),
  events: {
    // not sure yet
  },

  changeBackgroundColor: function(){
    this.$el.find('h2').css('background-color', 'yellow');
  },

  markAsDone: function(){
    this.$el.find('p').css( 'text-decoration', 'line-through' );
  },

  render: function() {
    var html = this.template(this.model);
    this.$el.html( html );
  }
});

$.ajax({
  url: 'http://localhost:3001/api/cards'

}).done(function(response){
  var cards = response;
  // console.log(response.Search);

  cards.forEach(function(card){
    var view = new QuoteItemView({ model: card }); //model: is basically the object we get back from the response in the forEach method.
    view.render();
    $('#app').append(view.el);
  });

});
