var clickedArea = document.getElementsByClassName('wordGuess')[0];

var game = {
  words: ['hello', 'there', 'guess', 'this', 'word'],
  guesses: [],
  numberOfLives: ['x','x','x','x','x']
};

var randomNumber = function(length){
  return Math.floor(Math.random() * length);
}
var getWord = function(){
  var arrayLength = game.words.length;
  var word = game.words[randomNumber(arrayLength)];
  return splitWord(word);
}

var splitWord = function(word){
  var wordLetters = word.split('');
  return hideLetters(wordLetters);
}

var hideLetters = function(chosenWord){
  var arrayChosenWord = chosenWord;
  var wordLength = arrayChosenWord.length;
  for(var i=0; i<3; i++){
    arrayChosenWord[randomNumber(wordLength)] = '_';
  }
  return printToDom(arrayChosenWord);
}

var printToDom = function(wordArray){
  var arrayLength = wordArray.length;
  for(var number = 0; number<arrayLength ; number++){
    var newListItem = document.createElement('li');
    newListItem.textContent = wordArray[number];
    clickedArea.appendChild(newListItem);
  }

}

clickedArea.addEventListener('click', function(event){
  if(event.target.tagName === 'LI' && event.target.textContent === '_'){
    var userInputEnabled = '<input type="text" autofocus="" value=""><button type="button" name="button">Submit</button>';
    event.target.innerHTML = userInputEnabled;
    submitButton();
  }else{
    console.log("that letter is already given");
  }
});

var submitButton = function(){
  var submitButton = document.querySelector('button');
  var inputArea = document.querySelector('input');

  submitButton.addEventListener('click', function(){
    var userInput = inputArea.value.toUpperCase();
    console.log(userInput);
  });
}
getWord();

// var inputCheck = function(letter){
//   if()
// }
