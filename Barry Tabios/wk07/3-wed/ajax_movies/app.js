// Ajax Movies
//
// movies fetching using javascript
// Summary
//
// The students will create a new movies app to allow users to search the database of movies.
//
// Specification
//
// Instead of returning a single title, the OMDb API allows you t do a search which will return multiple titles.
//
// For example if you search on Jaws, you will get a list like the following:
//
// Jaws
// Jaws 2
// Jaws 3-D
// Jaws Special
// Jaws Wired Shut
// write a frontend app to allow users to enter a search for movies, and to show the list of title within h2 tags without page refresh.
//
// index.html
// app.js
// style.css
// Extension
//
// turn each h2 titles into a link that goes to the corresponding IMDB movie page that opens in a new window
//
//

console.log('AJAX Movie DB');


// $.ajax({
//    url: 'http://omdbapi.com/?',
//    data: {s: 'jaws'},
//    method: 'get'
// }).done(function(data){
//    console.log(data)
// });
var input;

$searchBtn = $('.searchBtn');
$searchBtn.on('click', function(){
  input = document.querySelector('.input').value;

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


// document.querySelector('.searchBtn').addEventListener('click', function(){
//   console.log('hello there');
// });
