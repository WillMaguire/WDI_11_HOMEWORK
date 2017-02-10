
var ptNetwork = {
  'Alamein Line': ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'GlenWaverly Line': ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham Line': ['Southern Cross', 'Richmond', 'South Yarra','Prahran', 'Windsor']
}

//def origin
var origin = prompt("What's the origin of your trip?");
if (ptNetwork['Alamein Line'].indexOf(origin) < 0 && ptNetwork['GlenWaverly Line'].indexOf(origin) < 0 && ptNetwork['Sandringham Line'].indexOf(origin) < 0) {
  origin = prompt("Try again! " + origin + " isn't a station.");
}
// def destination
var destination = prompt("What's the destination of your trip?");
if (ptNetwork['Alamein Line'].indexOf(destination) < 0 && ptNetwork['GlenWaverly Line'].indexOf(destination) < 0 && ptNetwork['Sandringham Line'].indexOf(destination) < 0) {
  destination = prompt("Try again! " + destination + " isn't a station.");
}
// origin line
for (var i = 0; i < Object.keys(ptNetwork).length; i++) {
  for (var k = 0; k < Object.values(ptNetwork)[i].length; k++) {
    if (Object.values(ptNetwork)[i][k] === origin) {
      var originLineIndex = i;
      var originLineObjectIndex = k;
      var originIntersectionNodeIndex = Object.values(ptNetwork)[originLineIndex].indexOf('Richmond');
    }
  }
}
// destination line
for (var ii = 0; ii < Object.keys(ptNetwork).length; ii++) {
  for (var kk = 0; kk < Object.values(ptNetwork)[ii].length; kk++) {
    if (Object.values(ptNetwork)[ii][kk] === destination) {
      var destinationLineIndex = ii;
      var destinationLineObjectIndex = kk;
      var destinationIntersectionNodeIndex = Object.values(ptNetwork)[ii].indexOf('Richmond');
      }
    }
  }

var trip1 = [];
var trip2 = [];
// from origin to Richmond
if (originLineObjectIndex <= originIntersectionNodeIndex){
  for (var x = originLineObjectIndex; x <= originIntersectionNodeIndex; x++) {
    trip1.push(Object.values(ptNetwork)[originLineIndex][x]);
    trip1.push(" --> ");
    var trip1Distance = originIntersectionNodeIndex - originLineObjectIndex;
  }
    trip1 = trip1.join('');
}
else {
  for (var x = originLineObjectIndex; x >= originIntersectionNodeIndex; x--) {
    trip1.push(Object.values(ptNetwork)[originLineIndex][x]);
    trip1.push(" --> ");
    var trip1Distance = originLineObjectIndex - originIntersectionNodeIndex;
  }
    trip1 = trip1.join('');
}
// from Richmond to destination
if (destinationLineObjectIndex >= destinationIntersectionNodeIndex){
  for (var x = destinationIntersectionNodeIndex+1; x <= destinationLineObjectIndex; x++) {
    trip2.push(Object.values(ptNetwork)[destinationLineIndex][x]);
    trip2.push(" --> ");
  }
    trip2.pop();
    trip2 = trip2.join('');
    var trip2Distance = destinationLineObjectIndex - destinationIntersectionNodeIndex;
}
else {
    for (var x = destinationIntersectionNodeIndex - 1; x >= destinationLineObjectIndex; x--) {
      trip2.push(Object.values(ptNetwork)[destinationLineIndex][x]);
      trip2.push(" --> ");
  }
  trip2.pop();
  q.join(' ')
  trip2 = trip2.join('');
  var trip2Distance = destinationIntersectionNodeIndex - destinationLineObjectIndex;
}

var totDistance = trip2Distance + trip1Distance + 1;

console.log( 'Origin: '+ origin + '\n' + 'Destination: '+ destination + '\n' + '\n' + trip1+ trip2 + ' '+'\n'+'\n' + totDistance + ' stops total.');
