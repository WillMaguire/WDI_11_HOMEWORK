
console.log('transmogrifier is work');

var transmogrifier = function(numOne, numTwo, numThree) {
  var num4 = numOne * numTwo;
  var result = Math.pow(num4, numThree);
  console.log(result + ' this was transmogried');
}
transmogrifier(5, 6, 2)
