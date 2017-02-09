console.log('moneytree JS active');

var userChar = prompt('What character would you like?', '$');
var maxRow = Number(prompt('How many rows?', '5'));
var branchArray = []
// var testString = '     '

for (var i = 1; i <= (maxRow*2-1); i++) {
    branchArray.push(' ');
}
branchArray[maxRow-1] = userChar

var j = 1;
var oneUp = maxRow;
var oneDown = maxRow-2;

while (j < maxRow+1) {
  console.log('     ' + branchArray.join(''));
  branchArray[oneUp] = userChar;
  branchArray[oneDown] = userChar;
  oneUp++;
  oneDown--;
  j++;
}

// console.log('   x   ');
// console.log('  xxx  ');
// console.log(' xxxxx ');
