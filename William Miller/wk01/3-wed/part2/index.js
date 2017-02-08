//RECIPE CARD

// var recipe = {
//   title: 'Mole',
//   serves: 2,
//   ingredients: ['Cinnamon', 'Cumin', 'Cocoa']
// }
//
// console.log(recipe.title);
// console.log(recipe.serves);
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);

//The Reading List

var book1 = {
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel Garcia Marquez',
  alreadyRead: true,
};

var book2 = {
  title: 'The Sellout',
  author: 'Paul Beatty',
  alreadyRead: false,
};

var book3 = {
  title: 'The Unbearable Lightness of Being',
  author: 'Milan Kundera',
  alreadyRead: true,
};

var book4 = {
  title: 'Inherent Vice',
  author: 'Thomas Pynchon',
  alreadyRead: true,
};

var booklist = [book1, book2, book3, book4];


for (var i = 0; i < booklist.length; i++) {
var book = booklist[i];
var bookTotal = book.title + ' by ' + book.author;
  if (book.alreadyRead === true) {
    console.log('You already read' + ' ' + bookTotal);
  } else {
    console.log('You have not read' + ' ' + bookTotal);
  }
}

/* OLD ANSWER - figured out that I should make a total variable of the title and
author to be printed. Was not working, also realised by asking for booklist[i]
it would have just printed 'book4' etc. (if I had ever got it to work)

if (book.alreadyRead === true) {
  console.log('You already read' + " " + booklist[i]);
} else if (book.alreadyRead === false) {
  console.log('You haven not read' + " " + booklist[i]);
}*/

//IMBD Database

var favMovie = {
  title: 'There Will Be Blood',
  duration: 158,
  stars: ['Daniel Day Lewis', 'Paul Dano', 'Dillon Freasier']
}

function printMovieInfo(movie) {
  console.log(favMovie.title + 'lasts for' + ' ' + favMovie.duration + ' ' + 'minutes.' + ' ' + 'Starring' + ' ' + favMovie.stars);
}
printMovieInfo();
