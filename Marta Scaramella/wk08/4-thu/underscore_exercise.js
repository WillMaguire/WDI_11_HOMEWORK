var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// 1. Iterate through numbers and log each number to the console
 _.each(numbers,function(number) {
   console.log('res 1:' + number)
 });

// 2. Iterate through numbers and multiply each one of them by 5
_.each(numbers,function(number) {
  console.log('res 2:' + number * 5)
});

// 3.Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
console.log('res 3: ' + sum);

// 4.Get an array of all of the people in people that have the username "E"
var eusername = _.where(people, {username: "E"});
console.log( eusername);

// 5.Find the first object in people that has the id of 3
var first = _.findWhere(people, {username: "E"});
console.log( first);

// 6.Find the first person who has an age of less than 50
var first = _.find(people, function(person){ return person.age < 50; });
console.log( first);

// 7.Get an array of all of the people with an age of over 60
var first = _.filter(people, function(person){ return person.age > 60; });
console.log(first);

// 8.Remove all of the people with an age less than 40
var noRejected = _.reject(people, function(person){ return person.age < 40} )
console.log(noRejected);
