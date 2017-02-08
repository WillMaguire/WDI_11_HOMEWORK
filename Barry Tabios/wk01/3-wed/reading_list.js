console.log('JS Reading list');

var books = {
  Title: ['The Hobbit','The Kings', 'Harry Potter', 'Avatar'],
  Author:['JR Tolkien', 'Unknown', 'JK Rowling', 'JJ Abrams'],
  Read:[true, false, true, false]
};

var number_of_books = books.Read.length;

console.log(number_of_books);

var i = 0;

while (i < number_of_books){
 if (books.Read[i] === true){
   console.log('You already read ' + books.Title[i]);
 } else {
   console.log('You have not read ' + books.Title[i]);
 };
 i++;
};
