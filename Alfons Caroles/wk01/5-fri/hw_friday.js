//write a function which accept 2 arguments
//the array
//group of eg 3

//return a nested array of the groups

var students =['Alfons','Aniko','Barry','Gatluak','Helmi','Julian','Kerry','Kevin','Marta','Samantha','Sandesh','Will','William','Zach','Gerard','Mark','Soul'];
var max = students.length;
var min = 0;
var usedIndex = [];

var rdmNumber = function() {
  return Math.floor(Math.random() * (max - min)) + min;
}

function groupGenerator(x) {
  var groups = [];
  var splited = String(students).split(',');
  var i = 0;
  while (i < x){
    var memberOfGroup = splited[rdmNumber(min,max)];
    var studentIndex = students.indexOf(memberOfGroup);
    if (groups.includes(memberOfGroup) === false && usedIndex.includes(studentIndex) === false) {
      groups.push(memberOfGroup);
      usedIndex.push(studentIndex);
      i++;
    }
  }
  return groups;
}

function intGroupNumberValidation (numberOfMembers) {
var x;
  if (numberOfMembers >= 9) {
    x = 2;
  } else {
    x = max/(numberOfMembers);
  }
  return x;
}

function partyQuiz() {
  var numberOfMembers = Number(prompt('Please specify how many minimum number of team members in a group.'));
  var intGroupNumber = intGroupNumberValidation(numberOfMembers);
  var groupNumber = Math.floor(intGroupNumber);
  var groupings =[];
  var j= 0;

  usedIndex = [];

  while (j < groupNumber) {
    var memberLeft = max - usedIndex.length;
    var fullTeam = Math.floor(memberLeft/numberOfMembers);
    var oddTeamAddition = memberLeft % numberOfMembers;
    var addMemberPerGroup = Math.ceil(oddTeamAddition/groupNumber);

    if (memberLeft >= numberOfMembers){
      if (oddTeamAddition !== 0) {
        var proposedGroup = groupGenerator((numberOfMembers+addMemberPerGroup));
      } else {
        var proposedGroup = groupGenerator(numberOfMembers);
      }
    } else if (memberLeft < numberOfMembers){
      var proposedGroup = groupGenerator((memberLeft));
      }
    groupings.push(proposedGroup);
    j++;
  }
  return groupings;
}
