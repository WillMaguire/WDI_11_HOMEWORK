var ListItemView = Backbone.View.extend({

  className: 'list',

  template: Handlebars.compile( $('#list-item-template').html() ),

  events: {
    'click .completed-indicator': 'toggleCompleted',
    'keyup .add-task': 'addTask'
  },

  initialize: function() {

  },

  toggleCompleted: function(event) {
    $(event.target).closest('.task').toggleClass('completed');
  },

  addTask: function(event) {
    if (event.which === 13) {
      var taskItem = new Task({ description: this.$el.find('.add-task').val() });
      var view = new TaskItemView({ model: taskItem });
      $('.list-tasks').append(view.render().el);
      this.$el.find('.add-task').val('');
    };
  },

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    return this;
  }

});
