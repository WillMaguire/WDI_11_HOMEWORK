for (var i = 0; i <= 20; i++) {
  if (i%2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

for (var i = 0; i <= 10; i++) {
  for ( var j = 0; j <= 10; j++) {
    var ans = i*j;
    console.log(j + " * " + i + " = " + ans);
  }
}

var topChoices = ['mango', 'passion-fruit', 'strawberry'];

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

for (var x = 0; x < topChoices.length; x++) {
  console.log("My " + ordinal_suffix_of(x+1) + " choice is " + topChoices[x]);
}
