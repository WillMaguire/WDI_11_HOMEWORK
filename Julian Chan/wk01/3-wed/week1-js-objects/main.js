console.log('Starting the recipe card...');

var favouriteRecipe = {
  title: 'Apple tart',
  servings: 8,
  ingredients: ['Granny Smith apples', 'Caster sugar', 'Lemon juice', 'Puff pastry', 'Apricot jam']
}

console.log(favouriteRecipe.title);
console.log('Serves: ' + favouriteRecipe.servings);
console.log('Ingredients:');

for (var i = 0; i < favouriteRecipe.ingredients.length; i++) {
  console.log(favouriteRecipe.ingredients[i]);
}

console.log('Starting the reading list...');

var books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: true
  },
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    alreadyRead: false
  },
  {
    title: 'Thief of Time',
    author: 'Terry Pratchett',
    alreadyRead: true
  },
  {
    title: 'American Gods',
    author: 'Neil Gaiman',
    alreadyRead: false
  }
];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookString = '"' + book.title + '" by ' + book.author;

  if (book.alreadyRead) {
    console.log('You already read ' + bookString + '.');
  } else {
    console.log('You still need to read ' + bookString + '.');
  }
}

console.log('Starting the movie database...');

var favouriteMovie = {
  title: 'The Usual Suspects',
  durationInMinutes: 106,
  stars: ['Stephen Baldwin', 'Gabriel Byrne', 'Benicio Del Toro', 'Kevin Pollak', 'Kevin Spacey', 'Chazz Palminteri', 'Pete Postlethwaite']
}

function printMovie(movie) {
  return movie.title + ' lasts for ' + movie.durationInMinutes + ' minutes. Stars: ' + movie.stars.join(', ') + '.';
}

console.log(printMovie(favouriteMovie));
