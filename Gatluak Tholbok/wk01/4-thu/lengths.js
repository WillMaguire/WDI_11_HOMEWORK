console.log('If you see this, it means I am working. "\n"Sit back back, relax and be happy! :)');

var books = ['harry potter', 'lord', 'game of thrones'];

var lengths = function(books) {
    var arrayOfNumbers = [];
    var lengthOfFirstBook = books[0].length;
    arrayOfNumbers.push(lengthOfFirstBook);
    return arrayOfNumbers;

}

lengths(books);
