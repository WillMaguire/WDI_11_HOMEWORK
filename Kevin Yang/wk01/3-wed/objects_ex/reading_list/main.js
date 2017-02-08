console.log('reading List')

var book1 = {
  title: 'The Hobbit',
  author: 'J.R.R.Tolkien',
  alreadyRead: true,
}

var book2 ={
  title: 'The Lord of the Ring',
  author: 'J.R.R.Tolkien',
  alreadyRead: false,
}

var book3 ={
  title: 'The Lord of the Flies',
  author: 'William Golding',
  alreadyRead: true,
}

var books =[book1, book2, book3];



for (var i=0; i<=2;i++){
  if (books[i].alreadyRead == true){
    console.log('You already read '+ '"'+ books[i].title+" by "+ books[i].author+'"' );
  }
    else if(books[i].alreadyRead == false){
      console.log('You still need to read '+ '"'+ books[i].title+" by "+ books[i].author+'"');
    }
}
