var readingList = [
  book1 = {
    title: 'Fight Club',
    author: 'Chuck Palahniuk',
    alreadyRead: true
  },

  book2 = {
    title: 'Game Of Thrones',
    author: 'George R.R Martin',
    alreadyRead: false
  },

  book3 = {
    title: 'Lord of The Rings',
    author: 'J.R.R Tolkien',
    alreadyRead: false
  },

  book4 = {
    title: 'The Prince',
    author: 'Niccolo Machiavelli',
    alreadyRead: false
  },
];

// iterate over readingList array
// log each book title and author
for (var i = 0; i < readingList.length; i++) {
  console.log(
  // Title of book + " by " + Author of Book
  //  readingList[i].title + " by " + readingList[i].author
  );

  // if alreadyRead is true, log 'You have already read title by author'
  if ( readingList[i].alreadyRead ) {
    console.log('You already read "' + readingList[i].title + '" by ' + readingList[i].author );
  } else {
    console.log('You still need to read "' + readingList[i].title + '" by ' + readingList[i].author);
  }


}
