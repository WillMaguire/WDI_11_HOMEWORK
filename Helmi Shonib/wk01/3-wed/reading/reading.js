//var alreadyRead = new Boolean(false);
//document.write("alreadyRead.valueOf is : " + alreadyRead.valueOf())
var book = {
  title: ['The Hobbit', 'Lord of the Ring', 'The Two Tower'],
  author: 'J.R.R Tolkien',
  read: true
}

for (var i = 0; i < book.length; i++) {
  if (book(i).title + ", " + book(i).author) {
    console.log(book(i).title + ", " + book.author);
  } if (book[i].read === true)
    console.log('You have already read the book');
}else if (book[i].read === false) {
    console.log(' You are yet to read this book');
}


var books = [{
  title: 'hobbit',
  author: 'jrr tolkien'
  alreadyRead: true
},{
  title: 'fight club',
  author: 'chuck p',
  alreadyRead: true
}, {
  title: 'the sell out',
  author: 'paul'
  alreadyRead: false
}];

for (var index = 0; index < books.length; index++){
  var bookDescription = books[index].title + ' ' + books[index].author;
  if (books[index].alreadyRead) {
    console.log('you already read' + bookDescription)
  }else {
    console.log('you need to read' + bookDescription)
  }
}
