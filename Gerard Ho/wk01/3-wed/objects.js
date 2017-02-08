// Exercises: Objects
//
// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
//
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
//
// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

console.log("The Recipe Card");
var recipe1 = {
  title: "Mole",
  servings: "serves 2",
  ingredients: ["cinnamon", "cumin", "cocoa"]
}
console.log(recipe1.title);
console.log(recipe1.servings);
console.log(recipe1.ingredients[0]);
console.log(recipe1.ingredients[1]);
console.log(recipe1.ingredients[2]);

console.log("The Reading List");
var books = [
  { title: "A Little Life",
  author: "Hanya Yanagihara",
  alreadyRead: true },
  { title: "Between The World And Me",
    author: "Ta-Nehisi Co",
    alreadyRead: false },
  { title: "Fates and Furies",
    author: "Lauren Groff",
    alreadyRead: true },
  { title: "The Girl on the Train",
    author: "Paula Hawkin",
    alreadyRead: false },
  { title: "The Sellout",
    author: "Paul Beatty",
    alreadyRead: false },
];
for(var i=0; i<books.length; i++){
  var bookTitle = books[i].title;
  var bookRead = books[i].alreadyRead;

  if(bookRead){
    var comment = bookTitle + " is a book you have already read";
    console.log(comment);
  }else{
    var comment1 = bookTitle + " is a book you need to read";
    console.log(comment1);
  }
}

console.log("The Movie Database");
var movies = [
  {title: "Star Wars",
   duration: 2.1 ,
   stars: ["Daisy Ridley", "John Boyega", "Mark Hamill", "Carrie Fisher"]},
  {title: "Logan",
   duration: 1.8,
   stars: ["Hugh Jackman", "Patrick Stewart", "Boyd Holbrook"]},
  {title: "Guardians of the Galaxy Vol. 2",
   duration: 1.9,
   stars: ["Chris Pratt", "Vin Diesel", "Zoe Saldana", "Dave Baustista"]},
  {title: "John Wick: Chapter 2",
   duration: 1.9,
   stars: ["Keanu Reaves", "Ruby Rose", "John Leguizamo"]},
  {title: "Pirates of the Caribbean: Dead Men Tell No Tales",
   duration: 2.3,
   stars: ["Johnny Depp", "Orlando Bloom", "Javier Bardem", "Kaya Scodelario"]}
]
for(var i=0; i<movies.length; i++){
  var movieTitles = movies[i].title;
  var movieDuration = movies[i].duration;
  for(var num=0; num<movies[i].stars.length; num++){
    var movieStars = movies[i].stars.join(" ,");
  }

  var comment = movieTitles + " lasts for " + movieDuration + " hours. Stars "+ movieStars;

  console.log(comment);

}
