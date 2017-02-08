console.log('Starting the even/odd reporter...');

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even.');
  } else {
    console.log(i + ' is odd.');
  }
}

console.log('Starting multiplication tables...');

for (var i = 1; i <= 10; i++) {
  console.log(i + ' times table:');
  for (var j = 0; j <= 10; j++) {
    console.log(j + ' * ' + i + ' = ' + i * j);
  }
}

console.log('Starting top choices...');

var topcolors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (var i = 1; i <= topcolors.length; i++) {
  var suffix = 'th';

  if (i % 100 !== 11 && i % 100 !== 12 && i % 100 !== 13) {
    if (i % 10 === 1) {
      suffix = 'st';
    } else if (i % 10 === 2) {
      suffix = 'nd';
    } else if (i % 10 === 3) {
      suffix = 'rd';
    }
  }

  console.log('My ' + i + suffix + ' choice is ' + topcolors[i - 1] + '.');
}
