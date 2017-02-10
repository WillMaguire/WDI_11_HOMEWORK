console.log('Objects');

//The Recipe Card
var recipeCard = {title: 'Mole',
                  serves: 2,
                  ingredients: ['cinnamon','cumin','cocoa']
                };

console.log(recipeCard.title);
console.log("Serves: " + recipeCard.serves);
console.log("Ingredients:");
console.log(recipeCard.ingredients.join('\n'));

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
  bookDescription = listOfBooks[i].title + " by " + listOfBooks[i].author;
  
  if (listOfBooks[i].alreadyRead){
    console.log("You already read " + bookDescription);
  } else {
    console.log("You still need to read " + bookDescription);
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
