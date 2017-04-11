var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

_.each(numbers, function(number) {  //1
    console.log(number)
  });

_.each(numbers, function(number) {  //2
    console.log(number * 5)
  });

var total = _.reduce(numbers, function(memo, num){ return memo + num; }, 0); //3
console.log(total);

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

var arr = _.where(people, {username: "E"}); //4
console.log(arr);

var find = _.find(people, {id: 3}); //5

var find_age = _.find(people, (age:.val() < 50))
console.log(find_age);
