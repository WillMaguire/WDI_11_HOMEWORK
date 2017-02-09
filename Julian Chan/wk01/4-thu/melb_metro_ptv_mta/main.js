var alameinLine = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverleyLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringhamLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var trainLines = [alameinLine, glenWaverleyLine, sandringhamLine];
var intersectingStation = 'Richmond';

var origin = 'Hawthorn';
var destination = 'Flagstaff';
var route = [];
var routeString = 'origin: ' + origin +
                  '\ndestination: ' + destination + '\n\n';

if (origin === destination) {
  console.log(routeString + 'You\'re already here!');
} else {
  var getRoute = function(line, startStopNumber, endStopNumber) {
    if (endStopNumber >= startStopNumber) {
      return line.slice(startStopNumber, endStopNumber + 1);
    } else {
      return line.slice(endStopNumber, startStopNumber + 1).reverse();
    }
  }

  for (i = 0; i < trainLines.length; i++) {
    var line = trainLines[i];

    var originIndex = line.indexOf(origin);
    var destinationIndex = line.indexOf(destination);
    var intersectionIndex = line.indexOf(intersectingStation);

    if (originIndex >= 0 && destinationIndex >= 0) {
      route = getRoute(line, originIndex, destinationIndex);
      break;
    }

    if (originIndex >= 0) {
      // slice needed to avoid duplicate intersecting stations
      route = getRoute(line, originIndex, intersectionIndex).slice(0, -1).concat(route);
    }

    if (destinationIndex >= 0) {
      route = route.concat(getRoute(line, intersectionIndex, destinationIndex));
    }
  }

  console.log(routeString +
              route.join('----->') + '\n\n' +
              (route.length - 1) + ' stop(s) total');
}
