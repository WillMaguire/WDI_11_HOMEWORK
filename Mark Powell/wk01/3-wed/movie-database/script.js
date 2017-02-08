var favMovie = {
  title: 'Fight Club',
  director: 'David Fincher',
  runtime: '252 mins',
  starring: [
    "Brad Pitt",
    "Edward Norton",
    "Meatloaf",
    "Jared Leto",
    "Helena Bonham Carter"
  ]
};

  function movieInfo(){
    var director = favMovie.director;
    var title = favMovie.title;
    var runtime = favMovie.runtime;
    var cast = favMovie.starring.toString();

    console.log(title + " directed by " + director + " lasts for " + runtime + " and stars: " + cast);
}

movieInfo();
