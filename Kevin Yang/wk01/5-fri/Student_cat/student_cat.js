//More exercise
var students = ['Alfons','Aniko','Barry','Gatluak','Helmi','Julian','Kerry','Kevin','Marta','Samantha','Sandesh','Will','William','Zach','Gerald','Mark','Soul','Harambe']
//write function which accepts 2 arguments
//the array
// groups of e.g.3

var stu_categorize = function(inputArray,size){
  outputArray=[];
  for (var i=0; i<inputArray.length;i+=size){
    outputArray.push(inputArray.slice(i, i+ size));
  }
  return outputArray;
}

console.log(stu_categorize(students,3));
console.log('Connected to HTML');

//return a nested array of groups
// [['marta','sam','mark']],['helmi','aniko'...]]
