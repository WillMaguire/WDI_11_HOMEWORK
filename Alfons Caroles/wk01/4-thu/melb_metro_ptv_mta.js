console.log("PT PLanner");

// var alamein = ['Flinders Street', 'Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];
// var glenWaverley = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'];
// var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];

var trainLineOrigin = prompt('Please type your train line origin');
var origin = titleCase(prompt('Please type your train origin station'));
var trainLineDestination = prompt('Please type your train line destination');
var destination = titleCase(prompt('Please type your train station destination'));
//List of Global Variables
var allLines = [{
      name: "alamein",
      stations: ['Flinders Street', 'Richmond','East Richmond','Burnley','Hawthorn','Glenferrie']
    },{
      name: "glenWaverley",
      stations: ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga']
    },{
      name: "sandringham",
      "stations": ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
    }];

var journey = [];

// -----------------------

//To capitalise the input
function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

//This to add new lines
// var addNewLines = function() {
//   var newLineNames = prompt("Please enter line name");
//   var newStationsNames = prompt("Please enter station name");
//   var numberOfNewStations = prompt("Please enter number of stations to add for " + newLineNames);
//   var newLines = {};
//
//   newLines[0].name = newLineNames;
//   for (var stationNo = 0; stationNo < numberOfNewStations; stationNo++) {
//       return newLines[0].stations = newStationsNames;
//   }
//   return newLines;
//   return allLines = allLines.concat(newLines);
// }
// -------------------------------------

//These functions to validate user input
// var validateOriginLine = function() {
//   usrInput = prompt('Please enter your origin line')
//   while (allLines.includes(usrInput) === false){
//     return usrInput = prompt('Please enter your correct origin line');
//   }
// }
//
// var validateOriginStation = function(origin) {
//   while (allLines[validateOriginLine(trainLineOrigin)].includes(origin) === false){
//     return origin = prompt('Please enter your correct origin station');
//   }
//   return origin;
// }
//
// var validateDestinationLine = function(trainLineDestination) {
//   while (allLines.includes(trainLineDestination) === false){
//     return trainLineDestination = prompt('Please enter your correct destination line');
//   }
//   return trainLineDestination;
// }
//
// var validateDestinationStation = function(destination) {
//   while (allLines[validateDestinationLine(trainLineDestination)].includes(destination) === false){
//     return destination = prompt('Please enter your correct destination station');
//   }
//   return destination;
// }
// -----------------------------------

//This function to return index of train line.
var indexLine = function(name) {
  var x =0;
  while (allLines[x].name !== name){
    x++;
  }
  return x;
}

//This is the main function to setup journey plan.
var journeyPlanner = function() {
    var indexOriginLine = indexLine(trainLineOrigin);
    var indexDestinationLine = indexLine(trainLineDestination);
    var indexOrigin = allLines[indexOriginLine].stations.indexOf(origin);
    var indexDestination = allLines[indexDestinationLine].stations.indexOf(destination);
    var intersectionOrigin = allLines[indexOriginLine].stations.indexOf('Richmond');
    var intersectionDestination = allLines[indexDestinationLine].stations.indexOf('Richmond');

    if (indexDestinationLine !== indexOriginLine) {
      if (indexDestination > intersectionDestination) {
        if (indexOrigin > intersectionOrigin) {
          for (var i = indexOrigin; i > intersectionOrigin; i--) {
            journey.push(allLines[indexOriginLine].stations[i]);
          }
          for (var j = intersectionDestination; j <= indexDestination; j++) {
            journey.push(allLines[indexDestinationLine].stations[j]);
          }
        } else if (indexOrigin < intersectionOrigin) {
          for (var i = indexOrigin; i < intersectionOrigin; i++) {
            journey.push(allLines[indexOriginLine].stations[i]);
          }
          for (var j = intersectionDestination; j <= indexDestination; j++) {
            journey.push(allLines[indexDestinationLine].stations[j]);
          }
        }
      } else if (indexDestination < intersectionDestination) {
        if (indexOrigin > intersectionOrigin) {
          for (var i = indexOrigin; i > intersectionOrigin; i--) {
            journey.push(allLines[indexOriginLine].stations[i]);
          }
          for (var j = intersectionDestination; j >= indexDestination; j--) {
            journey.push(allLines[indexDestinationLine].stations[j]);
          }
        } else if (indexOrigin < intersectionOrigin) {
          for (var i = indexOrigin; i < intersectionOrigin; i++) {
            journey.push(allLines[indexOriginLine].stations[i]);
          }
          for (var j = intersectionDestination; j >= indexDestination; j--) {
            journey.push(allLines[indexDestinationLine].stations[j]);
          }
        }
      }
    } else if (trainLineDestination == trainLineOrigin){
      if (indexOrigin < indexDestination){
        for (var i = indexOrigin; i <= indexDestination; i++) {
          journey.push(allLines[indexOriginLine].stations[i]);
        }
      } else if (indexOrigin > indexDestination){
        for (var j = indexOrigin; j >= indexDestination; j--) {
          journey.push(allLines[indexDestinationLine].stations[j]);
        }
      }
    }
    console.log(journey.join('-->'));
    console.log(journey.length + ' stops total');
}
