// write functions that accepts 2 arguments
  // array of students
  // group size
var students = [
  'Alfons','Aniko','Barry','Gatluak','Helmi',
  'Julian','Kerry','Kevin','Marta','Samantha',
  'Sandesh','Will','William','Zach','Gerald','Mark','Soul'
];

var makeGroups = function(groupSize){
  // console.log(students);
  var students = [
    'Alfons','Aniko','Barry','Gatluak','Helmi',
    'Julian','Kerry','Kevin','Marta','Samantha',
    'Sandesh','Will','William','Zach','Gerald','Mark','Soul'
  ];

  while (students.length > 0) {
    groups = students.splice(0,groupSize);
  }
};
  // return a nested array of groups, i.e [[student, student],[student,student], [student, student]]
  // If any remaining student - put it in the last group
