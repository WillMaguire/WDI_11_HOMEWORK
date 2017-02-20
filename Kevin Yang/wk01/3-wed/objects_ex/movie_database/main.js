console.log('Movie_database');

var movie1 ={
  title: 'Puff the Magic Dragon',
  duration: '30 minutes',
  stars: ['Puff Jackie', 'Living Sneezes'],
}

var movie2 = {
  title: 'Deadpool',
  duration: '1hours 48mins',
  stars:['Ryan Reynolds','Morena Baccarin']
}

var movie3 = {
  title: 'Ghostbusters',
  duration: '2 hours 14mins',
  stars:['Melissa McCarthy','Kristen King','Kate McKinnon']
}

var movies = [movie1, movie2, movie3];

function movieInfo() {
  for (var i=0; i<=2; i++){
  console.log(movies[i].title +' lasts for '+movies[i].duration+ '. Stars: '+ movies[i].stars)
}
}

movieInfo();
