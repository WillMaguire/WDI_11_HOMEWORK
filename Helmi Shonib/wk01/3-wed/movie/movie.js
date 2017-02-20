var movie = {
  title: ['Titanic', 'Home Alone', 'Speed'];
  duration: [120, 90, 70];
  stars: ['Leonardo Di Caprio', 'Kate Winslet', 'Mackauley Caulkin', 'Joe Pesci', 'Keanu Reeves', 'Sandra Bullock'];
  }

  function movie(title, duration, stars){
    return this.title + this.duration + this.stars;
  }
