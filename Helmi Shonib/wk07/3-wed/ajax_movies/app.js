console.log('AJAX Movie DB');
var input;
$searchBtn = $('.searchBtn');
$searchBtn.on('click', function(){
  input = document.querySelector('.input').value;
  console.log(input);
  $.ajax({
     url: 'http://omdbapi.com',
     data: {s: input},
     method: 'get'
  }).done(function(data){
    result = data["Search"]; // Assigns the array of objects from Object Search
    for(i=0; i<result.length; i++){
      title = result[i]['Title'];
      newH2 = document.createElement('H2');
      newH2.setAttribute("id", i );
      document.querySelector('body').appendChild(newH2);
      // document.querySelector(.i).innerHTML = title;
      document.getElementById(i).innerHTML = title;
      console.log(title);
    };
  });
});
