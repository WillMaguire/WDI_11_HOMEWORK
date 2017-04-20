var TaskItemView = Backbone.View.extend({

  className: 'task content',

  template: Handlebars.compile( $('#task-item-template').html() ),

  events: {
    'mouseenter': 'showDelete',
    'mouseleave': 'hideDelete',
    'click button': 'deleteTask',
    'dblclick .description': 'editDescription',
    'keyup input': 'submitEdit'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  showDelete: function() {
    this.$el.children('button').show();
  },

  hideDelete: function() {
    this.$el.children('button').hide();
  },

  deleteTask: function() {
    this.remove();
  },

  editDescription: function() {
    this.$el.children('.description').hide();
    this.$el.children('input').show();
  },

  submitEdit: function(event) {
    if ( event.which === 13 ) {
      this.model.set('description', event.target.value);
      this.$el.children('input').hide();
      this.$el.children('.description').show();
    }
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }

});
