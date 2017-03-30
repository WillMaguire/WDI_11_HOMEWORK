var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];


numbers.forEach(function(number) {
  console.log(number);

  var multiplied = number * 5;
  console.log(multiplied);

  var reduced = _.reduce(number, function(memo, num) {
    return memo - num;
  }, 0);
  console.log(reduced);

});

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

people.forEach(function(username) {
  var findE = _.where(people, {username: "E"});
  console.log(findE);
})

var findIdThree = _.where(people, {id: 3});
console.log(findIdThree);

var lessThanFifty = _.filter(people, function(a) {return a.age < 50});
console.log(lessThanFifty);
})

var ageIsOverSixty = _.filter(people, function(a) {return a.age > 60;
  console.log(ageIsOverSixty);
})

var removeAge = _.filter(people, function(age) {return age.age < 40;
  console.log(removeAge);
});

// Iterate through numbers and log each number to the console

// Iterate through numbers and multiply each one of them by 5

// Iterate through numbers and reduce it by adding them together

// Get an array of all of the people in people that have the username "E"

// Find the first object in people that has the id of 3

// Find the first person who has an age of less than 50

// Get an array of all of the people with an age of over 60

// Remove all of the people with an age less than 40
