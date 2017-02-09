// Even/odd reporter

guessNumber = Math.floor(Math.random()*20);

for (var number = 0; number <= 20; number++) {
    if (number % 2 === 0) {
    console.log(number);
  } else {
    console.log(number + "" + 'odd number');
  }
}

// Multiplication Tables

guessNumber = Math.floor(Math.random()*10);


for (var number = 0; number <= 10; number++) {

  for (var multiplier =0; multiplier <= 10; multiplier++) {
    var result = multiplier * number;
    console.log(result);
  }
}


//for (var j = 0; j < 3; j++) {
  //console.log('j:' + j);
  //for (var i = 0; i < 5; i++) {
    //console.log('i:' + i);
  //}
//}


// Top choices

var choices = ['green','blue','black','yellow','grey','red','white'];
var suffix = ['st', 'nd', 'rd', 'th']

for (var i = 0; i < choices.length; i++) {
    console.log('My #' + ((i + 1) + suffix[i]) + ' choice is ' +  choices[i]);
}

// reading list

var books = [ {
  title: 'the hobbit',
  author: 'jrr tolkien',
  alreadyRead: true,
} {
  title: 'fight club',
  author: 'chuck p',
  alreadyRead: true,
} {
  title: 'Game of thrones',
  author: 'George rr Martin',
  alreadyRead: false,
}
];

for (var index = 0; index < books.length; index++) {
  var bookDescription = books[index].title + '' + books[index].author;

  if (books[index].alreadyRead) {
    console.log('You already read' + booksDescription);
  } else {
    console.log('You need to read' + bookDescription);
  }
}
