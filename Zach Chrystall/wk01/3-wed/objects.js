var myRecipe = {
  title : 'Mole',
  Servings : 2,
  Ingredients : ['cinnamon', 'cumin', 'cocoa']
};

console.log(myRecipe.title);
console.log("Serves: " + myRecipe.Servings);
console.log('Ingredients:');
console.log(myRecipe.Ingredients[0]);
console.log(myRecipe.Ingredients[1]);
console.log(myRecipe.Ingredients[2]);


var book1 = {
  title : 'Ready to Soar',
  author : 'Naomi Simson',
  readAlready : false
}

var book2 = {
  title : 'Rich dad, poor dad',
  author : 'Robert Kayosaki',
  readAlready : true
}

var book3 = {
  title : 'To live beyond the stars',
  author : 'Robert Heilein',
  readAlready : true
}

var books = [book1, book2, book3];


for (var i = 0; i < books.length; i++) {
  if (books[i].readAlready) {
    console.log('You have already read "' + books[i].title + '" by ' + books[i].author)
  } else {
    console.log('You still need to read "' + books[i].title + '" by ' + books[i].author)
  }
}


var movie = {
  title : 'Shawshank Redemption',
  duration : 142,
  stars : ['Tim Robins', 'Morgan Freeman', 'Bob Gunton']
};

var movieInfo = function(mv) {
  console.log(mv.title + " lasts for " + mv.duration + "minutes. Stars: " + mv.stars.join(', ') + '.');
}

movieInfo(movie)
