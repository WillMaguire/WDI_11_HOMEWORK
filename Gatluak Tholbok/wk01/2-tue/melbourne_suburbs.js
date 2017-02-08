var user = prompt('Where in Melbourne do you live?');
var bestPlace = "Oakleigh";

if (user !== bestPlace) {
  console.log("Sorry, you are missing out");
} else if (user === bestPlace) {
  console.log('Congratulations! you live in the best suburb in the city');
} else {
  console.log('Do you even live in Melboure');
}
