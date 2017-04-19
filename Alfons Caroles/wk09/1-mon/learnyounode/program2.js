var count = 0;
var numbers = process.argv;

for (var i = 2; i < numbers.length; i++){
  count += +process.argv[i];
}

console.log(count);
