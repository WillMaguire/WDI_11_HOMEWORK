console.log("Objects");

// // The Recipe Card

var recipe = {title : "Mole",
serves: 2,
ingredients: ["cinnamon", "cumin", "coca"]
}
console.log(recipe.title);
console.log("Serve: " + recipe.serves);
console.log("Ingredients: ");
for(var i = 0; i <=2 ; i++){
  console.log(recipe.ingredients[i]);
}

// The Reading List
var books = [{title : "html" , author : "jack" , alreadyRead : false},
             {title : "js" ,   author : "matt" , alreadyRead : true },
             {title : "rubby", author : "ram"  , alreadyRead : true }];

for(var i = 0; i <= books.length - 1; i++){
  console.log("Book title is: " + books[i].title + "\nBook Author is: "
  + books[i].author);

  if(books[i].alreadyRead === true){
    console.log ("You already read " + "\"" + books[i].title + "\"" + " by "
    + books[i].author)
  } else {
    console.log ("You still need to read " + "\"" + books[i].title + "\"" + " by "
    + books[i].author)
  }
}

// The Movie Database

var movie = {title: "Armagardon", duration: 90, stars: ['Bruce', 'Matt', 'Jack']};

function myFav(movie){
 return console.log(movie.title + " lasts for " + movie.duration + " minutes "
  + "Stars " + movie.stars.join(","));
}
myFav(movie);
