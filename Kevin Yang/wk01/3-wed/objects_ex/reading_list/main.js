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

//suggested answers
// var books ={{
//   title:'the hobbit',
//   author: 'JRR tolkien',
//   alreadyRead: true
// },{
//   title:'fight club',
//   author:'Chuck Palahniuk',
//   alreadyRead: true,
// },{
//   title: 'The Lord of the Flies',
//   author: 'William Golding',
//   alreadyRead: true
// }};
//
// for (var index=0; index < books.length; index++){
//   var bookDescription = books[index].title+ ' '+ books[index].author;
//   if(books[index].alreadyRead ===true){
//     console.log('you already read '+bookDescription);
//   } else {
//     console.log('you need to read '+bookDescription)
//   }
// }
