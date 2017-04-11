WebsiteModel = Backbone.Model.extend ({
  initialize: function() {

  }
});

$(document).ready(function() {

});


$.ajax({
  url: 'http://localhost:3000/cards/api'
}).done(function(res){
  var movies = res.Search;
  console.log(movies);

  movies.forEach(function(movie) {

    var view = new QuoteItemView({ model: movie }); //model is inbuilt to
    view.render();
    $('#app').append(view.el);
  });

});
