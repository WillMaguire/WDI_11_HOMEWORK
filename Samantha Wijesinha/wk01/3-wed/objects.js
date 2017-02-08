console.log("objects js connected!")

//The Recipe Card
var recipe = {
 title: 'spaghetti',
 servings: 4 ,
 ingredients: ['sauce', 'mince meat', 'pasta']
};

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


//the reading list

var books = [
  {
  title: 'American Gods',
  author: 'Neil Gaiman',
  alreadyRead: true
},
  {
  title: 'The Hobbit',
  author: "J.R.R Tolkien",
  alreadyRead: true
},
{
  title: 'Seveneves',
  author: 'Neal Stephenson',
  alreadyRead: false,
} ]


for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === false) {
    console.log("Need to read " + books[i].title + " by " + books[i].author)
  } else  console.log("I have read " + books[i].title + " by " + books[i].author);
}


//imdb

var movie = [
  {
  title: 'Waynes World',
  duration: 1.5,
  stars: ['mike myers', 'dana carvey']
},
  {
    title: 'James Bond',
    duration: 2,
    stars: ['Daniel Craig', 'Someone Else']
},
{
  title: 'Star Wars IV',
  duration: 1,
  stars: ['Harrison Ford', 'Carrie Fisher']
} ]

function moviePrint () {

  for (var i = 0; i < movie.length; i++) {

      console.log( movie[i].title + " goes for " + movie[i].duration + " hour(s) and stars " + movie[i].stars.join(' , ') );

  }

}

moviePrint()
