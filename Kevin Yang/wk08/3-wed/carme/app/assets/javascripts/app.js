$(document).ready(function(){

  $('.new-card-form').on('submit', function(event){
    event.preventDefault();
    console.log('creating new card');

    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: {
        name: $('.new-card-name').val(),
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card){
      console.log(card);

      var source = $('#card-template').html();
      var template = Handlebars.compile(source);
      var html = template(card);
      $('.wrapper').append(html);
    })
  });


  $('.wrapper').on('click', '.delete-action' ,function(event){
    console.log('deleting');

    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function(){
      //remove the card from DOM
      $(event.target).closest('.card').fadeOut(500, function(){
      $(event.target).closest('.card').remove();
      });
    });
  }); //delete-action

  $.ajax({
    url: '/api/cards'

  }).done(function(res){
    var shuffleCards = _.shuffle(res);
    shuffleCards.forEach(function(item) {
      var source = $('#card-template').html();//grab the complete string
      var template = Handlebars.compile(source);//turn tmeplate string into a function
      var html = template(item);//html with tmeplate & data merged together
      $('.wrapper').append(html);
    });

  });
  console.log('moving on')

  $('.wrapper').on('click', '.edit-action', function(event){
    console.log('editing');

    var id = $(event.target).closest('.card').data('id');
    $.ajax({
      url: '/api/cards/' + id,
      method: 'put'
      data: {
        name: $('.edit-card-name').val(),
        image_url: $('.edit-card-image_url').val()
      }
      }).done(function() {

      });
  })

})
