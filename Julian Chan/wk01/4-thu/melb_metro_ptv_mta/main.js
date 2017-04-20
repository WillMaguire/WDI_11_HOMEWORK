var alameinLine = {
  name: 'Alamein',
  stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
}

var glenWaverleyLine = {
  name: 'Glen Waverley',
  stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
}

var sandringhamLine = {
  name: 'Sandringham',
  stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var belgraveLine = {
  name: 'Belgrave',
  stations: ['Richmond', 'Auburn', 'Camberwell', 'Surrey Hills', 'Box Hill', 'Tecoma']
}

var pakenhamLine = {
  name: 'Pakenham',
  stations: ['Broadmeadows', 'Glenbervie', 'Kensington', 'Richmond', 'Murrumbeena', 'Cardinia Road']
}

var trainLines = [alameinLine, glenWaverleyLine, sandringhamLine, belgraveLine, pakenhamLine];
var lineNames = trainLines.map(function(line) { return line.name; });
var intersectingStation = 'Richmond';

var trainMapString = trainLines.map(function(line) {
  return line.name + ': ' + line.stations.join(', ');
}).join('\n');

var parse = function(input) {
  var toTitleCase = function(string) {
    var toSentenceCase = function(word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    }
    var stringArray = string.split(' ').map(function(str) { return toSentenceCase(str.trim()); });

    return stringArray.join(' ');
  }

  return input.split(',').map(function(str) {
    return toTitleCase(str.trim().split(' ').filter(function(word) {
      return word !== '';
    }).join(' ')); 
  });
}

var promptLineAndStationIndices = function(promptMessage) {
  var input = parse(prompt(promptMessage));
  var lineIndex = lineNames.indexOf(input[0]);
  var stationIndex;

  if (lineIndex >= 0) {
    stationIndex = trainLines[lineIndex].stations.indexOf(input[1]);
  }

  if (lineIndex < 0 || stationIndex < 0) {
    alert('Sorry. I didn\'t understand that. Please try again.');
    return promptLineAndStationIndices(promptMessage);
  }

  return [lineIndex, stationIndex];
}

var origin = promptLineAndStationIndices(trainMapString + '\n\n' + 'Please enter your start line and station (e.g. "' + lineNames[0] + ', ' + trainLines[0].stations[0] + '"):');
var destination = promptLineAndStationIndices(trainMapString + '\n\n' + 'Please enter your destination line and station (e.g. "' + lineNames[0] + ', ' + trainLines[0].stations[0] + '"):');

var originLineIndex = origin[0];
var originStationIndex = origin[1];
var destinationLineIndex = destination[0];
var destinationStationIndex = destination[1];

var originStationName = trainLines[originLineIndex].stations[originStationIndex];
var destinationStationName = trainLines[destinationLineIndex].stations[destinationStationIndex];

var routeString = 'Origin: ' + originStationName +
                  '\nDestination: ' + destinationStationName + '\n\n';

if (originStationName === destinationStationName) {
  console.log(routeString + 'You\'re already here!');
} else {
  var route = [];

  var getRoute = function(line, startStopNumber, endStopNumber) {
    if (endStopNumber >= startStopNumber) {
      return line.stations.slice(startStopNumber, endStopNumber + 1);
    } else {
      return line.stations.slice(endStopNumber, startStopNumber + 1).reverse();
    }
  }

  if (originLineIndex === destinationLineIndex) {
    route = getRoute(trainLines[originLineIndex], originStationIndex, destinationStationIndex);
  } else {
    route = getRoute(trainLines[originLineIndex], originStationIndex, trainLines[originLineIndex].stations.indexOf(intersectingStation)).slice(0, -1).concat(getRoute(trainLines[destinationLineIndex], trainLines[destinationLineIndex].stations.indexOf(intersectingStation), destinationStationIndex));
  }

  console.log(routeString +
              route.join(' -----> ') + '\n\n' +
              (route.length - 1) + ' stop(s) total');
}
