var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

_.each(numbers,function(num) {
  console.log(num);
  // console.log(num * 5);
})

_.each(numbers,function(num) {
  console.log(num * 5);
})

var sum = _.reduce(numbers, function(memo,num){
  console.log('Calculating: ' + memo + ' + '+ num);
  return memo + num;
})
console.log(sum);

var usernameE = _.filter(people, function(individual) {
 return individual.username === "E"; });
 console.log(usernameE);

var person = _.find(people, function(individual) {
  return individual.id === 3});
  console.log(person);

var person = _.find(people, function(individual) {
  return individual.age < 50});
  console.log(person);

var oldies = _.filter(people, function(individual) {
  return individual.age > 60});
  console.log(oldies);

  var young = _.filter(people, function(individual) {
    return individual.age < 40});
    console.log(young);
