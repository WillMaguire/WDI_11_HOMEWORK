
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

function each(numbers, func) {
  for (var i = 0; i < numbers.length; i++) {
    var results = numbers[i]*5
  };
  return results
}
//
// // Iterate through numbers and reduce it by adding them together
//
var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
console.log(sum)
//
// // Get an array of all of the people in people that have the username "E"
//
var e = _.filter(people, function(username){ return username.username == "E"; });
console.log(e)
//
// // Find the first object in people that has the id of 3
//
var search = _.filter(people, function(elem) { return elem.id == 3; });
console.log(search)
//
// // Find the first person who has an age of less than 50
//
var middle = _.find(people, function(elem) {

  return elem.age < 50;
});
console.log(middle)
//
// // Get an array of all of the people with an age of over 60
//
var old = _.filter(people, function(elem) {
  return elem.age > 60;
});
console.log(old);
//
// // Remove all of the people with an age less than 40
//
var odds = _.reject(people, function(elem){
   return elem.age < 40;
 });
console.log(odds);

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
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core",
  "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!",
  "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-",
  "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen",
  "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// Sort the people by 'uid'
var find = _.sortBy(people, 'uid')
console.log(find);

// Group the random words by the lower case version of their first letter
var sorted = _.sortBy(words, function (i) {
  return i.toLowerCase();
});
console.log(sorted);

// Check to see if all the words have more than 3 characters
var morethan3 = _.every(words, function(elem) {
  return elem > 3;
 });
 console.log(morethan3);

// Check if some words are over twenty characters long
var morethan20 = _.some(words, function(elem) {
  return elem.length < 20;
});
console.log(morethan20);

// Get an array of all of the uids in people
var findId = _.pluck(people, 'uid');
console.log(findId);

// Find the person with the highest uid
var highest = _.max(people, function(num){
   return num.uid;
 });
 console.log(highest);

// Get three random numbers out of numbers
var random = _.sample(numbers, 3);
console.log(random);
