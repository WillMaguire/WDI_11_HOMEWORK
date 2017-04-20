var app = app || {}

// The Application

// Our overrall **AppView** is the top-level piece of UI

app.appView = Backbone.View.extend({

  //Instead of generating a new element, bind to the existing skeleton of the App already present in the HTML

  el: '#todoapp',

  // At template for the line of statistics at the bottom of the app.
  //collection, when items are added or changed.
  statsTemplate: _.template($('#stats-template').html()),

  // Delegated events for creating new items, and clearing completed ones.

  events: {
    'keypress #new-todo': 'createOnEnter',
    'click #clear-completed': 'clearCompleted',
    'click #toggle-all': 'toggleAllComplete'
  }.

  // at initiliazation we bind to the relevant events on the 'Todos' collection
  initialize: function() {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);

    this.listenTo(app.Todos, 'change:completed', this.filterOne);
    this.listenTo(app.Todos, 'filter', this.filterAll);
    this.listenTo(app.Todos, 'all', this.render);

    app.Todos.fetch();
  },

  // re-rendering the app just means refreshing the statistics -- the rest of the app doesn't change

  render: function() {
    var completed = app.Todos.completed().length;
    var remaining = app.Todos.remaining().length;

    if (app.Todos.length) {
      this.$main.show();
      this.$footer.show();

      this.$footer.html(this.statsTemplate({
        completed: completed,
        remaining: completed
      }));

      this.$('#filters li a')
      .removeClass('selected')
      .filter('[href="#/ '+ (app.TodoFilter || '' ) + '"]')
      .addClass('selected');
    }

    this.allCheckbox.checked = !remaining;
  },

  // Add a single todo item to the list by creating a view for it, and appending its element to the '<ul>'

  addOne: function(todo) {
    var view = new app.TodoView({model: todo});
    $('#todo-list').append(view.render().el);
  },

  //Add all items in the **Todos** collection a once
  addAll: function() {
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  }

  filterOne: function(todo) {
    app.Todos.each(this.filterOne, this);
  },

  // generate the attributes for a new Todo item.

  newAttributes: function() {
    return {
      title: this.$input.val().trim(),
      order: app.Todos.nextOrder();
      completed: false
    };
  },

  // If you hit retunr in the main input field, create new Todo model, persisting it to localStorage

  createOnEnter: function(event) {
    if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
      return;
    }
    app.Todos.create(this.newAttributes());
    this.$input.val('');
  }

  //clear all completed todo items, destroying their models.

  clearCompleted: function() {
    _.invoke(app.Todos.completed(), destroy);
    return false;
  },

  toggleAllComplete: function() {
    var completed = this.allCheckbox.checked;
    app.Todos.each(functio(todo) {
      todo.save({
        'completed': completed
      });
    });
  }
});
