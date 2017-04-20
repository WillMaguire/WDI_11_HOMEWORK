

// person = 'tom';

// you get undefined as a the return value but this is not the normal undefined.

// however this condition is return false and the condition wont even run in the first place. for loop checks every single time before it even run the for loop.
//
// for (var i = 0; person === 'kasun'; i++) {
//   console.log(i);
// }
// // same as above as for loop
// var i = 0;
// if(i < 5) {
//   comsole.log(i)
// }
// i++;

var checkCakeOrPudding = function(i) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i + ': cake pudding');
  } else if (i % 3 === 0) {
    console.log(i+ ': cake');
  } else if (i % 5 === 0) {
    console.log(i + ': pudding');
  } else {
    console.log(i);
  }
};
var mainCode = function() {
  for (var i = 1; i <= 100; i+=1) {
    checkCakeOrPudding(i);
  }
}
mainCode();
// "else" does not need have to have a condition
// "else if" else if only ever runs only if the initial
