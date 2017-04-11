
var tasks = [{
  description: 'eat lunch'
}, {
  description: 'digest food'
}];

var listView = new ListItemView();
$('#app').append(listView.render().el);

tasks.forEach(function(task) {
  var taskItem = new Task(task);
  var view = new TaskItemView({ model: taskItem });
  $('.list-tasks').append(view.render().el);
});
