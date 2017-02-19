
// write a function which accepts 2 arguments
// the array
// groups of 3

var ga_students = ['Alfons','Aniko','Barry','Gatluak','Helmi','Julian','Kerry','Kevin','Marta','Samantha','Sandesh','Will','William','Zach','Gerard','Mark','Soul','Harambe'];


function arrays(addArray,size) {
  newArray = [];
  for (var i = 0;i< addArray.length; i+=size) {
    newArray.push(addArray.slice(i, i+size));
  }
  return newArray;
}
arrays(ga_students,3);
