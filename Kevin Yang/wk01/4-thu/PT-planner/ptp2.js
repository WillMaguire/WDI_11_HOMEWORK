var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverleyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var trainLines = [alameinLine, glenWaverleyLine, sandringhamLine];
var intersectingStation = 'Richmond';

var origin = 'Richmond'
var destination = 'Southern Cross';
var journey = [];

for (i = 0; i < trainLines.length; i++) {
  var line = trainLines[i];

  var originIndex;
  var destinationIndex;

  originIndex = line.indexOf(origin);
  destinationIndex = line.indexOf(destination);

  if (originIndex >= 0 && destinationIndex >= 0) {
    if (destinationIndex >= originIndex) {
      journey = line.slice(originIndex, destinationIndex + 1);
    } else {
      journey = line.slice(destinationIndex, originIndex + 1).reverse();
    }

    break;
  }

  if (originIndex >= 0) {
    var intersectionIndex = line.indexOf(intersectingStation);

    if (intersectionIndex >= originIndex) {
      journey = line.slice(originIndex, intersectionIndex + 1).concat(journey);
    } else {
      journey = line.slice(intersectionIndex, originIndex + 1).reverse().concat(journey);
    }
  }

  if (destinationIndex >= 0) {
    var intersectionIndex = line.indexOf(intersectingStation);

    if (intersectionIndex >= destinationIndex) {
      journey = journey.concat(line.slice(destinationIndex, intersectionIndex).reverse());
    } else {
      journey = journey.concat(line.slice(intersectionIndex + 1, destinationIndex + 1));
    }
  }
}

console.log('origin: ' + origin +
            '\ndestination: ' + destination + '\n\n' +
            journey.join('----->') + '\n\n' +
            (journey.length - 1) + ' stops total');
