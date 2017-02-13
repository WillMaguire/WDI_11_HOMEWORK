// write functions that accepts 2 arguments
  // array of students
  // group size
var students = [
  'Alfons','Aniko','Barry','Gatluak','Helmi',
  'Julian','Kerry','Kevin','Marta','Samantha',
  'Sandesh','Will','William','Zach','Gerald','Mark','Soul'
];

var makeGroups = function(arrayName, groupSize){
  for (var i = 0; i <= arrayName.length; i++) {
    //console.log(arrayName[i]);
    var newArray = [];
    if (newArray.length <= groupSize) {
      var student = arrayName.shift();
      newArray.push(student);
      students = arrayName.push(newArray);

    }
    return students;

  }
};
  // return a nested array of groups, i.e [[student, student],[student,student], [student, student]]
  // If any remaining student - put it in the last group
