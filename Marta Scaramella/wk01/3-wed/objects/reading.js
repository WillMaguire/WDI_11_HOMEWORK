

var book1 = {
  title: 'The dark half',
  author: 'S. King',
  alreadyRead: true
}

var book2 = {
  title: 'Eva Luna',
  author: 'Allende',
  alreadyRead: false
}

var book3 = {
  title: 'Madame Bovary',
  author: 'G. flaubert',
  alreadyRead: true
}

var books = [book1, book2, book3];

for (var index = 0; index < books.length; index++) {
console.log(books[index].title + ' by ' + books[index].author);
  if(books[index].alreadyRead) {
    console.log('You already read "' + books[index].title + '" by ' + books[index].author);
  }
  else{
    console.log('You still need to read "' + books[index].title + '" by ' + books[index].author);
  }
}
