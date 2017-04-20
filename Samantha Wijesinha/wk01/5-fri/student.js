console.log("student js is working!")

var students = ["Sandesh","Kerry", "one", "one", "Gerard","Helmi", "Samantha", "Barry", "Aniko","Zach", "Soul", "Mark","William", "Gatluak", "Kevin","Will", "Marta", "Julian", "Alfons"]
var groupBy = 3;


function groupByStudents (students, groupBy)  {

if (students.length%groupBy === 0) {
  var groups = [];
    for (var i = 0; i < students.length; i += groupBy) {

        groups.push(students.slice(i, i + groupBy));
    }

} else {
  var groups = [];
    for (var i = 0; i < students.length; i += groupBy) {
        groups.push(students.slice(i, i + groupBy));

    }
    var concatGroups =  groups[groups.length-1].concat(groups[groups.length-2])
    groups.push(concatGroups)
    delete groups[groups.length-2];
  console.log(groups);




}
return groups
}

var groups = groupByStudents(students, groupBy);
