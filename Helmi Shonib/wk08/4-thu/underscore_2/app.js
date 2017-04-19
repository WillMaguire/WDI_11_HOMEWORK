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

var uid = _.sortBy(people, function(individual)
{ return individual.uid });
console.log(uid);

var lowercase = _.map(words, function(letter)
{return letter.toLowerCase() });
var firstLetter = _.groupBy(lowercase, function(word)
{return word.substr(0,1)});
console.log(firstLetter);

var moreThanThree = _.every(words, function(characters) {
 return characters.length > 3; });
 console.log(moreThanThree);

 var moreThanTwenty = _.some(words, function(characters) {
  return characters.length > 20; });
  console.log(moreThanTwenty);

var uid = _.pluck(people, 'uid')
console.log(uid);

var highest = _.max(people, function(person)
{return person.uid});
console.log(highest);

var evenAndOdd = _.countBy(numbers, function(num)
{return num % 2 ==0 ? 'even': 'odd';});
console.log(evenAndOdd);

var rand = _.sample(numbers, [3]);
console.log(rand);
