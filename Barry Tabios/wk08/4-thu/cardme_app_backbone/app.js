console.log('JS Connected for cardme_app_backbone...')

var View = Backbone.View.extend({// NESTED OBJECTS

  template: Handlebars.compile( $('#cardme-template').html()),

  events: {
    'click #delete-btn': 'deleteCard',
    'click #edit-btn': 'editCard',
    'click #create-btn': 'create'
  },
  //
  deleteCard: function() {
      console.log('testing');
  //     this.$el.find('p').css('text-decoration', 'line-through');
  },

  editCard: function() {
      console.log('testing');
  //     this.$el.find('h2').css('background-color', 'mistyrose');
  },

  create: function(){
      var html = this.template(this.model);
      var test = this.$el.html(html);
      console.log(this.model.id);
      model.destroy();
      debugger
  },


  render: function(){
    var html = this.template(this.model);
    this.$el.html(html);
  }


});


$.ajax ({
  url: 'http://localhost:3000/api/cards/',
  method: 'get'
}).done(function(result){
  console.log(result);
  var cards = result;

  cards.forEach(function(card){

    var view = new View({ model: card }); // MODEL is the name of the
    view.render();
    $('#container').append(view.el);

  });
});
