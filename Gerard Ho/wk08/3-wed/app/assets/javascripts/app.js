$(document).ready(function(){
  console.log("hello i am awesome");
  $.ajax({
    url: '/api/cards'
  }).done(function(res){
    var shuffledCards = _.shuffle(res);

    shuffledCards.forEach(function(card){
      var source = $('#card-template').html();
      var templateFunction = Handlebars.compile(source);
      var html = templateFunction(card);
      $('.wrapper').append(html);
      // button();
    });
  });

  // function button(){
  //   $('.delete-action').on('click',function(event){
  //     var $id =  $(event.target).closest(".card").data('id');
  //     $.ajax({
  //       url: '/api/cards/' + $id,
  //       method: 'delete'
  //     }).done(function(){
  //       $(event.target).closest('.card').fadeOut(500,function(){
  //         $(this).remove()
  //       });
  //     });
  //   });
  // }

  $('.new-card-form').on('submit',function(event){
    event.preventDefault();
    console.log("hello this button is working")
    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: $('.new-card-form').serialize()
      // {
      //   name: $('.new-card-name').val(),
      //   image_url : $('.new-card-image').val()
      // }
    }).done(function(data){
      var source = $('#card-template').html();
      var templateFunction = Handlebars.compile(source);
      var html = templateFunction(data);
      $('.wrapper').append(html);
      // button();
    })

  })

  $('.wrapper').on('click',function(event){
    event.preventDefault()
    var $target = $(event.target).closest('.card').data('id');
    var clickedArea = event.target.attributes[0].textContent;

    if (clickedArea === "delete-action"){
      $.ajax({
        url: '/api/cards/' + $target,
        method: 'delete'
      }).done(function(){
        $(event.target).closest('.card').fadeOut(500,function(){
          $(this).remove()
        });
      });
    }else if(clickedArea === "edit-action"){
      var $form = $('<form>').addClass('edit-card-form');
      var $button = $('<div>');
      var $target = $(event.target).closest('.card');

      $target.find('.edit-box').append($form.append(makeLabel().text("New Name")).append(makeInput().addClass('change-name')).append(makeLabel().text("New Image")).append(makeInput().addClass('change-image')).append($button.addClass("update-card").text('Submit')))

      $('.update-card').on('click',function(event){
        event.preventDefault()
        var $id = $(event.target).closest('.card').data('id');
        $.ajax({
          url: '/api/cards/'+$id,
          method: 'put',
          data: {
            name: $('.change-name').val(),
            image_url: $('.change-image').val()
          }
        }).done(function(data){
          var source = $('#card-template').html();
          var templateFunction = Handlebars.compile(source);
          var html = templateFunction(data);
          $('.card[data-id=' + data.id +']').replaceWith(html);
        });
      });
    }
  });

  function makeLabel(){
    return $('<label>');
  }

  function makeInput(){
    return $('<input>');
  }
});
