console.log("Objects");

// The Recipe Card

var recipe = {title : "Mole",
serves: 2,
ingredients: ["cinnamon", "cumin", "coca"]
}
console.log(recipe.title);
console.log("Serve: " + recipe.serves);
console.log("Ingredients: ");
console.log(recipe.ingredients.join(","));


// The Reading List
var books = [{
  title : "html", 
  author : "jack",
  alreadyRead : false
 },{
  title : "js",
  author : "matt",
  alreadyRead : true 
 },{
  title : "rubby",
  author : "ram",
  alreadyRead : true
}];

for(var i = 0; i <= books.length - 1; i++){
  console.log("Book title is: " + books[i].title + "\nBook Author is: "
  + books[i].author);
  var bookDescription= "\"" + books[i].title + "\"" + " by ";
    + books[i].author

  if(books[i].alreadyRead){
    console.log ("You already read " + bookDescription);
  } else {
    console.log ("You still need to read " + bookDescription);
  }
}

// The Movie Database

var movie = {title: "Armagardon", duration: 90, stars: ['Bruce', 'Matt', 'Jack']};

function myFav(movie){
 return console.log(movie.title + " lasts for " + movie.duration + " minutes "
  + "Stars " + movie.stars.join(","));
}
myFav(movie);
