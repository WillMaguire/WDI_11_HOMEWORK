console.log("wow");

var userStartingPoint = prompt("Where are you starting your journey");
var userEndPoint = prompt("Where are you ending your journey");

var newArray1;
var newArray2;

var lineAlamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var lineGlenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var lineSandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

//WHICH INDEX NUMBER DOES RICHMOND STATION RESIDE IN EACH OF THE ARRAYS
var origin1 = lineAlamein.indexOf("Richmond");
var origin2 = lineGlenWaverly.indexOf("Richmond");
var origin3 = lineSandringham.indexOf("Richmond");
//CHECKS IF THE STARTING STATION EXISTS
var stationCheck1 = lineAlamein.indexOf(userStartingPoint);
var stationCheck2 = lineGlenWaverly.indexOf(userStartingPoint);
var stationCheck3 = lineSandringham.indexOf(userStartingPoint);
//CHECKS IF THE ENDING STATION EXISTS
var stationCheck4 = lineAlamein.indexOf(userEndPoint);
var stationCheck5 = lineGlenWaverly.indexOf(userEndPoint);
var stationCheck6 = lineSandringham.indexOf(userEndPoint);

if(stationCheck1>=0){
  if(origin1<stationCheck1 && stationCheck4<0){
    newArray1 = lineAlamein.slice(origin1,(stationCheck1+1)).reverse();

  }else if(origin1>stationCheck1 && stationCheck4<0){
    newArray1 = lineAlamein.slice(stationCheck1,(origin1+1));

  }else if(stationCheck1<stationCheck4){
    newArray1 = lineAlamein.slice(stationCheck1, (stationCheck4+1));

  }else if(stationCheck1>stationCheck4){
    newArray1 = lineAlamein.slice(stationCheck4, (stationCheck1+1)).reverse();

  }
}else if(stationCheck2>=0){
  if(origin2<stationCheck2 && stationCheck5<0){
    newArray1 = lineGlenWaverly.slice(origin2,(stationCheck2+1)).reverse();
  }else if(origin2>stationCheck2 && stationCheck5<0){
    newArray1 = lineGlenWaverly.slice(stationCheck2,(origin2+1));
  }else if(stationCheck2<stationCheck5){
    newArray1 = lineAlamein.slice(stationCheck2, (stationCheck5+1));
  }else if(stationCheck2>stationCheck5){
    newArray1 = lineAlamein.slice(stationCheck5, (stationCheck2+1)).reverse();
  }
}else if(stationCheck3>=0){
  if(origin3<stationCheck3 && stationCheck6<0){
    newArray1 = lineSandringham.slice(origin3,(stationCheck3+1)).reverse();
  }else if(origin3>stationCheck3 && stationCheck6<0){
    newArray1 = lineSandringham.slice(stationCheck3,(origin3+1));
  }else if(stationCheck3<stationCheck6){
    newArray1 = lineAlamein.slice(stationCheck3, (stationCheck6+1));
  }else if(stationCheck3>stationCheck6){
    newArray1 = lineAlamein.slice(stationCheck6, (stationCheck3+1)).reverse();
  }
}else{
  console.log("the location you are looking for doesn't exist");
}

//THE FINAL DESTINATION--------------------------------------------------------

if(stationCheck4>=0 && stationCheck1<0){
  if(origin1<stationCheck4){
    newArray2 = lineAlamein.slice((origin1+1),(stationCheck4+1));
  }else{
    newArray2 = lineAlamein.slice(stationCheck4,origin1).reverse();
  }
}else if(stationCheck5>=0 && stationCheck2<0){
  if(origin2<stationCheck5){
    newArray2 = lineGlenWaverly.slice((origin2+1),(stationCheck5+1));
  }else{
    newArray2 = lineGlenWaverly.slice(stationCheck5,origin2).reverse();
  }
}else if(stationCheck6>=0 && stationCheck3<0){
  if(origin3<stationCheck6){
    newArray2 = lineSandringham.slice(origin3+1,(stationCheck6+1));
  }else{
    newArray2 = lineSandringham.slice(stationCheck6,origin3).reverse();
  }
}
if(newArray1 == undefined && newArray2 == undefined){
  console.log("Please Try Again");
}
if(newArray1.length>0 && newArray2 == undefined){
  console.log("origin: " + userStartingPoint);
  console.log("destination: " + userEndPoint);
  console.log(newArray1.join('---->'));
  console.log(newArray1.length + " stops total");
}else if(newArray1.length>0 && newArray2.length>0){
  var combine = newArray1.concat(newArray2);
  console.log("origin: " + userStartingPoint);
  console.log("destination: " + userEndPoint);
  console.log(combine.join('---->'));
  console.log(combine.length + " stops total");
}
