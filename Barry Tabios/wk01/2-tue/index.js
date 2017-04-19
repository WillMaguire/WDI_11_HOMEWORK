var student_name = prompt('please enter your name')
var menu = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops - please enter your choice');
console.log('hello ' + student_name);

if(menu === 'fruit salad' || menu === 'tofurkey'){
  console.log('This cuisine is vegan friendly');
} else {
  console.log('Vegans beware!');
};
