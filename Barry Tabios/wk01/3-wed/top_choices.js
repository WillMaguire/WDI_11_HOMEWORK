console.log('JS for top choices');

var top_choices = [];

for (var i = 0; i < 3; i++){

  top_choices.push(prompt('Enter your top 3 choices'));

};

i = 0;

while (i < top_choices.length){
  if (i === 0){
    console.log('My 1st choice is ' + top_choices[i]);
  };

  if (i === 1){
    console.log('My 2nd choice is ' + top_choices[i]);
  };

  if (i === 2){
    console.log('My 3rd choice is ' + top_choices[i]);
  };

  i++;

};
