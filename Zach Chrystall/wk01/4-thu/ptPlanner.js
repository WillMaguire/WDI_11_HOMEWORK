console.log('choo choo');

var alamein = ['Flinders street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
var lines = [alamein, glenWaverley, sandringham];
var arrow = ' -----> '

var start;
var end;

var main = function() {
  // creatButtons();
  // input();
  var start = prompt('where would you like to start?');
  var end = prompt('where would you like to go?');
  richmondCheck(start, end);
  printResult(startIndex, endIndex);
}

//find all the stops between here and there.
var findStops = function(firstIndex, secondIndex) {
  var route = [];
  if (firstIndex[1] < secondIndex[1]) {
    for (var i = firstIndex[1]; i <= secondIndex[1]; i++) {
      route.push(lines[firstIndex[0]][i]);
    }
  } else {
    for (var i = firstIndex[1]; i >= secondIndex[1]; i--) {
      route.push(lines[firstIndex[0]][i]);
    }
  }
  return route;
}

// find indexes for any particular stop
var findIndexes = function(location) {
  for (var i = 0; i < lines.length; i++) {
    var stopIndex = lines[i].indexOf(location);
    if (stopIndex !== -1) {
      var lineIndex = i;
      return [lineIndex, stopIndex];
    }
  }
};

// function to generate the indexes of the start and end
var startIndex;
var endIndex;

var richmondCheck = function(start, end) {
  if (start === 'Richmond') {
    endIndex = findIndexes(end);
    startIndex = [endIndex[0], lines[endIndex[0]].indexOf(start)];
  } else if (end === 'Richmond') {
    startIndex = findIndexes(start);
    endIndex = [startIndex[0], lines[startIndex[0]].indexOf(end)];
  } else {
    startIndex = findIndexes(start);
    endIndex = findIndexes(end);
  }
}

var printResult = function(startIndex, endIndex) {
  if (startIndex[0] === endIndex[0]) {
    console.log(findStops(startIndex, endIndex).join(arrow));
  } else {
    richOnStartLine = [startIndex[0], lines[startIndex[0]].indexOf('Richmond')];
    richOnEndLine = [endIndex[0], lines[endIndex[0]].indexOf('Richmond')];
    firstLine = findStops(startIndex, richOnStartLine);
    secondLine = findStops(richOnEndLine, endIndex);
    console.log(firstLine.join(arrow) + '| Change at ' + secondLine.join(arrow) + ' \n \nTotal stops: ' + (firstLine.length + secondLine.length - 1));
  }
}

// var creatButtons = function() {
//   for (var i = 0; i < lines.length; i++) {
//     for (var j = 0; j < lines[i].length; j++) {
//       var myLocations = document.getElementById('locations');
//       var stopButton = document.createElement('li');
//       stopButton.className = 'button';
//       stopButton.innerHTML = lines[i][j];
//       stopButton.setAttribute('data-card', lines[i][j]);
//       stopButton.addEventListener('click', input);
//       myLocations.appendChild(stopButton);
//     }
//   }
// }
//
// locationsClicked = [];
// var input = function() {
//   locationsClicked.push(this.getAttribute('data-card'));
//   if (locationsClicked.length === 2) {
//     start = locationsClicked[0];
//     end = locationsClicked[1];
//     locationsClicked = [];
//   }
// }

main();
