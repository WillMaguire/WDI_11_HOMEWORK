var students = ['Alfons','Aniko','Barry','Gatluak','Helmi','Julian','Kerry','Kevin','Marta','Samantha','Sandesh','Will','William','Zach','Gerald','Mark','Soul'];
var groupBy = function (list, size) {
  //placeholder array
  var studentsArray = [];
  //sets the variable to be use as input as second argument for slice function
  var x = size;
 	for(var i =0;i<list.length;i+=size){
    studentsArray.push(list.slice(i,x)); 
    //updates the slice variable to move onto the next index required
  	x = x + size;
 	}
  if(list.length%2!=0){
  	//if list provided is odd number, remove the last array with single element
  	var leftOver = studentsArray.pop();
  	var randomIndex = getRandomInt((studentsArray.length-1));
  	//re-insert element into a randomly selected array
  	studentsArray[randomIndex].push(leftOver);
  	return studentsArray;
  }else{
  	return studentsArray;
  }
}

function getRandomInt(num) {
  return Math.floor(Math.random()*(num+1));
}

var studentGrouped = groupBy(students, 2);
console.log(studentGrouped);

