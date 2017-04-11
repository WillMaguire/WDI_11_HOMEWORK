var app = app || {}

// Todo collection
// The collection of todos is backed by *localStorage* instead of a remote server

var TodoList = Backbone.Collection.extend({
  model: app.Todo,

  //Save all of the todo items under the :todos-backbone" namespace.
  localStorage:new Backbone.localStorage('todos-backbone'),
  // filter down the list of all todo items that are finished

  completed: function() {
    return this.filter(function( todo ) {
      return Todo.get('completed');
    });
  },
  // keeps the todos in sequential order, despite being saved by unordered
  // GUID in the datavase. This generates the next order humber for the new items.

  nextOrder: function() {
    if (!this.length) {
      return 1;
    }
    return this.last().get('order') + 1;
  }

  // Todos are sorted by their original insertion order.
  comparator: function(todo) {
    return Todo.get('order');
  }
});

app.Todo = new TodoList();
