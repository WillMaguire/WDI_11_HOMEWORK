var app = app || {}

// Todo Item View

// The DOM element for a todo item...
app.TodoView = Bsckbone.View.extend({

  //...is a list tag
  tagname: 'li',

  //Cach the template function for a single item.

  template: _.template($('#item-template').html() )
  // The DOM events specific to an item
  events: {
    'dbclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // The TodoView listens for changes to its model, re-rendering. SInce there's a one ot one correspondence between a **Todo** and a **TodoView** in this app, we set a direct reference on the model for convinience

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  //re-renders the titles of the todo itme.
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$input = this.$('.edit');
    return this;
  },

  //switch this view into editing mode, displaying the input field

  edit: function() {
    this.$el.addClass('editing');
    this.$input.focus();
  },

  // close editing mode saving changes to the todo.

  close: function() {
    var value = this.$input.val().trim();

    if(value) {
      this.model.save({title: value});
    }
    this.$el.removeClass('editing');
  },
  // if you hit 'enter', we're through editing the item.

  updateOnEnter: function(e) {
    if (e.which === ENTER_KEY) {
      this.close();
    }
  }
});
