
// Create a loop that will iterate from 0 to 20
for (var i = 0; i <= 10; i++) {
  var timesNine = i * 9;
  console.log(i + " * 9 = " + timesNine);
}

var outerArray = [];

for(var i = 1; i < 10; i++){
  for(var y = 1; y < 10; y++){
      var multiplied = y * i;
      console.log(i + " x " + y + " + " + "= " + multiplied );
  }
}
