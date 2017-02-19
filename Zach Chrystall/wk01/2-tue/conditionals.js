console.log('JS is running');

var ageString = prompt('What is your age?');
var age = parseInt(ageString);

if (age < 18) {
  console.log("Come back when you've grown up a bit.");
} else {
  console.log('Come on in buddy!');
}
