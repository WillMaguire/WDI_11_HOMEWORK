
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

//1 Iterate through numbers and log each number to the console

_.each(numbers, function(num) {
  console.log(num);
});

//2 Iterate through numbers and multiply each one of them by 5
_.each(numbers, function(num)) {
  return num * 5;
}

//3 Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);

//4 Get an array of all of the people in people that have the username "E"
_.filter(people, function(person){ return person.username == 'E';});

//5 Find the first object in people that has the id of 3
var firstThree = _.find(people, function(person){ return person.id  == 3; });

//6 Find the first person who has an age of less than 50
var lessFifty = _.find(people, function(person){ return person.age < 50; });

//7 Get an array of all of the people with an age of over 60
var overSixty = _.filter(people, function(persons){ return persons.age > 60; });

//8  Remove all of the people with an age less than 40

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// 1 Sort the people by 'uid'
_.sortBy(people, 'uid');

// 2 Group the random words by the lower case version of their first letter
_.groupBy(words, function(word) {
  return word[0].toLowerCase();
});

// 3 Check to see if all the words have more than 3 characters
_.every(words, function(word) { return word.length > 3 });

// 4 Check if some words are over twenty characters long
_.some(words, function(word) { return word.length > 20 });

// 5 Get an array of all of the uids in people
_.map(people, function(person) { return person.uid });

// 6 Find the person with the highest uid
_.max(people, function(person) { return person.uid });

// 7 Return an object that says how many even numbers and how many odd numbers there are in numbers
_.countBy(numbers, function(num) {
  return num % 2 === 0 ? 'even' : 'odd';
});

// 8 Get three random numbers out of numbers
_.sample(numbers, 3);
