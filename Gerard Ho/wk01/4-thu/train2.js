console.log("working");

var userStartingPoint = "Glenferrie";
var userEndPoint = "Flagstaff";
var trainLines = [
{
  train: "Alamein",
  locations: ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
},
{
  train: "Glen Waverly",
  locations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"]
},
{
  train: "Sandringham",
  locations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}
];

var findLocation = function(userStartingPoint, userEndPoint){
  var found1;
  var found2;
  var count;
  var indexId1;
  var indexId2;

    for(count = 0; count<3; count++){
      if(found1>=0){
        break;
      }else{
        found1 = trainLines[count].locations.indexOf(userStartingPoint);
        indexId1 = count;
      }
    }

    for(count = 0; count<3; count++){
      if(found2>=0){
        break;
      }else{
        found2 = trainLines[count].locations.indexOf(userEndPoint);
        indexId2 = count;
      }
    }
    var locationArray = [indexId1,found1,indexId2,found2];
    return findRichmond(locationArray);
}

var findRichmond = function(locationArray){
  var array1 = locationArray;
  var richmond1 = trainLines[array1[0]].locations.indexOf("Richmond");
  var richmond2 = trainLines[array1[2]].locations.indexOf("Richmond");
  var richmondArray = [array1[0],richmond1,array1[2],richmond2];
  return sliceArrays(locationArray,richmondArray);
}

var sliceArrays = function(locationArray,richmondArray){
  var destinations = locationArray;
  var commonIntersect = richmondArray;
  var startArray;
  var endArray;

  if(destinations[1]<commonIntersect[1]){
    startArray = trainLines[destinations[0]].locations.slice(destinations[1],commonIntersect[1]+1);
  }else{
    startArray = trainLines[destinations[0]].locations.slice(commonIntersect[1],destinations[1]+1);
    startArray = startArray.reverse();
  }

  if(destinations[3]<commonIntersect[3]){
    endArray = trainLines[destinations[2]].locations.slice(destinations[3],commonIntersect[3]);
    endArray = endArray.reverse();
  }else{
    endArray = trainLines[destinations[2]].locations.slice(commonIntersect[3]+1,destinations[3]+1);
  }

  var combinedArray = startArray.concat(endArray);
  return displayResults(combinedArray);
}

var displayResults = function(combinedArray){
  var finalArray = combinedArray;
  var arrayLength = finalArray.length;
  var journeyStart = finalArray[0];
  var journeyEnd = finalArray[arrayLength-1];
  var journeyStops = finalArray.join(" ---> ");
  var output = "Origin: "+ journeyStart + "\n" +
                "Final Stop: " + journeyEnd + "\n" +
                "Number of stops: "+ arrayLength + "\n" +
                journeyStops;
  return console.log(output);

}
