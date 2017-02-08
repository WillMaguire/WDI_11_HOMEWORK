console.log('Objects');

//The Recipe Card
var recipeCard = {title: 'Mole',
                  serves: 2,
                  ingredients: ['cinnamon','cumin','cocoa']
                };

console.log(recipeCard.title);
console.log("Serves: " + recipeCard.serves);
console.log("Ingredients:");

for (i = 0; i < recipeCard.ingredients.length; i++) {
  console.log(recipeCard.ingredients[i]);
}


//The Reading List
var listOfBooks = [{
      title: "Harry Potter",
      author: "JK Rowling",
      alreadyRead: true
    },{
      title: "The Lord of The Rings",
      author: "JRR Tolkien",
      alreadyRead: false
    },{
      title: "The Da Vinci Code",
      author: "Dan Brown",
      alreadyRead: true
    }];

for (i = 0; i < listOfBooks.length; i++) {
  if (listOfBooks[i].alreadyRead === true){
    console.log("You already read " +listOfBooks[i].title + " by " + listOfBooks[i].author);
  } else {
    console.log("You still need to read " +listOfBooks[i].title + " by " + listOfBooks[i].author);
  }
}

// The Movie Database
var movieList = {
      title: 'The Jungle Book',
      duration: 106,
      stars:['Neel Sethi','Bill Murray','Ben Kingsley']
    }

function movieInfo() {
  console.log(movieList.title + " lasts for " + movieList.duration + " minutes. Stars: " + movieList.stars);
}
movieInfo();
