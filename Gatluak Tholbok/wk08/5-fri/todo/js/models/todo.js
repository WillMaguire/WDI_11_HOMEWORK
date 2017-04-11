var app = app || {};

app.Todo = Backbone.Model.extend({
  // Todo Model
  //todo has title and completed attributes

  defaults: {
    title: '',
    completed: false
  },

  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
