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
console.log("-----------1------------")
_.each(numbers,function(num){console.log(num)})

// Iterate through numbers and multiply each one of them by 5
console.log("-----------2------------")
_.each(numbers,function(num){console.log(num*5)})
// Iterate through numbers and reduce it by adding them together
console.log("-----------3------------")
var num = _.reduce(numbers,function(prev,now){
  return prev + now;
})
console.log(num)
// Get an array of all of the people in people that have the username "E"
console.log("-----------4------------")
var newArray = _.filter(people,function(person){
  if(person.username === "E"){
    return person;
  }
})
console.log(newArray)
// Find the first object in people that has the id of 3
console.log("-----------5------------")
_.find(people,function(person){
  if(person.id === 3){
    console.log(person)
  }
})
// Find the first person who has an age of less than 50
console.log("-----------6------------")
_.find(people,function(person){
  if(person.age < 50){
    console.log(person)
  }
})
// Get an array of all of the people with an age of over 60
console.log("-----------7------------")
var oldPeople = _.filter(people,function(person){
  if(person.age>60){
    return person
  }
})
console.log(oldPeople)

// Remove all of the people with an age less than 40
console.log("-----------8------------")
var removeYoung = _.reject(people, function(person){
  if(person.age<40){
    return person
  }
})
console.log(removeYoung)
