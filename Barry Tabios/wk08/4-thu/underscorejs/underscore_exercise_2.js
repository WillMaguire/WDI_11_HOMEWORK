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

// Sort the people by 'uid'

var sort_uid = _.sortBy(people, function(person){ return person.uid; });

console.log(sort_uid);

// Group the random words by the lower case version of their first letter

var low_case = _.map(words, function(word){ return word.toLowerCase(); });
var in_order = _.sortBy(low_case, function(l_word){ return l_word; });
console.log(in_order);

// Check to see if all the words have more than 3 characters
var num_characters = _.every(words, function(word) {
  return word.length > 3;
});

console.log(num_characters);

// Check if some words are over twenty characters long

var num_characters_over20 = _.every(words, function(word) {
  return word.length > 20;
});

console.log(num_characters_over20);


// Get an array of all of the uids in people

var array_uid = _.pluck(people, 'uid')
console.log(array_uid);

// Find the person with the highest uid

var highest_uid = _.max(people, function(person){ return person.uid; });

console.log(highest_uid);

// Return an object that says how many even numbers and how many odd numbers there are in numbers

var odd_even = _.countBy(numbers, function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});

console.log(odd_even);


// Get three random numbers out of numbers

var random_num = _.sample(numbers,3)
console.log(random_num);
