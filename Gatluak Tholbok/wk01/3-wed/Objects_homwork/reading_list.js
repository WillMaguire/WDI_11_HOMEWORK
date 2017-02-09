
console.log('This is a reading list. Is it working?');

var books = [
    {
        title: 'Tools of Titans',
        author: 'Tim Ferriss',
        read: false
    },
    {
        title: 'Elon Musk',
        author: 'Ashley Vance',
        read: true
    },
    {
        title: 'Like a Virgin',
        author: 'Richard Branson',
        read: false
    }
]

for (var i = 0; i < books.length; i++) {
  if (books[i].title + ", " + books[i].author) {
    console.log(books[i].title + ", " + books[i].author);
  } if (books[i].read === false) {
    console.log('You are yet to read this book');
  } else if (books[i].read === true) {
    console.log('You have already read this book')
  }
}
