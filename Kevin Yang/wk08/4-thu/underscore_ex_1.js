var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Iterate through numbers and log each number to the console
function displayEach(num){
  // console.log(num)
};
_.each(numbers, displayEach);
// Iterate through numbers and multiply each one of them by 5
function timesFive(num){
  num * 5
};
_.each(numbers, timesFive);

// Iterate through numbers and reduce it by adding them together
var sum = _.reduce(numbers, function(memo, num){ return memo + num; }, 0 );

// Get an array of all of the people in people that have the username "E"
var filter = _.filter(people, function(elem){ return elem.username == "E"})


// Find the first object in people that has the id of 3
var firstId = _.find(people, function(elem){ return elem.id == 3})

// Find the first person who has an age of less than 50
var firstAge = _.find(people, function(elem){ return elem.age < 50})

// Get an array of all of the people with an age of over 60
var return_60_output = [];
function return60(elem){
  if(elem.age > 60){
    return_60_output.push(elem)
  }
}
_.each(people, return60)

// Remove all of the people with an age less than 40
var removalist = _.reject(people, function ageLess40(elem){
  return elem.age < 40;
});
