var ptNetwork = {
  'Alamein Line': ['a', 'c','Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  'GlenWaverly Line': ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  'Sandringham Line': ['Southern Cross', 'Richmond', 'South Yarra' ,'b','Prahran', 'Windsor']
}

var node = 'Richmond';

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
        // var originLine = Object.keys(ptNetwork)[i];
        var originLineIndex = i;
        var originLineObjectIndex = k;
        // console.log(originLine);
        // console.log(originLineIndex);
        // console.log('originLineObjectIndex is ' + originLineObjectIndex);
      // }
        if (Object.values(ptNetwork)[originLineIndex][k] === node) {
          var originIntersectionNodeIndex = k;
        // console.log('originIntersectionNodeIndex is ' + originIntersectionNodeIndex);
        }
      }
    }


// destination line - origin - richmond
// if (originLineObjectIndex <= originIntersectionNodeIndex+1){
    for (var ii = 0; ii < Object.keys(ptNetwork).length; ii++) {
      for (var kk = 0; kk < Object.values(ptNetwork)[ii].length; kk++) {
        if (Object.values(ptNetwork)[ii][kk] === destination) {
          // var destinationLine = Object.keys(ptNetwork)[ii];
          var destinationLineIndex = ii;
          var destinationLineObjectIndex = kk;
          // console.log(destinationLine);
          // console.log(destinationLineIndex);
          // console.log(destinationObjectIndex);
        // }
        if (Object.values(ptNetwork)[ii][kk] === node) {
          var destinationIntersectionNodeIndex = kk;
          // console.log(destinationIntersectionNodeIndex);
        }
        }
      }
    }
  }
// else {
//   for (var ii = Object.keys(ptNetwork).length; ii < originIntersectionNodeIndex; ii++) {
//     for (var kk = 0; kk < Object.values(ptNetwork)[ii].length; kk++) {
//       if (Object.values(ptNetwork)[ii][kk] === destination) {
//         var destinationLine = Object.keys(ptNetwork)[ii];
//         var destinationLineIndex = ii;
//         var destinationObjectIndex = kk;
//         // console.log(destinationLine);
//         // console.log(destinationLineIndex);
//         // console.log(destinationObjectIndex);
//       }
//       if (Object.values(ptNetwork)[ii][kk] === node) {
//         var destinationIntersectionNodeIndex = kk;
//         // console.log(destinationIntersectionNodeIndex);
//       }
//   }
// }
//
// }
// origin richmond destination
var trip1 = [''];
var trip2 = [''];
var totalTrip = [''];

if (originLineObjectIndex <= originIntersectionNodeIndex){
  for (var x = originLineObjectIndex; x <= originIntersectionNodeIndex; x++) {
    trip1.push(Object.values(ptNetwork)[originLineIndex][x]);
  }
  console.log(trip1);
}
else {
  for (var x = originIntersectionNodeIndex; x <= originLineObjectIndex; x++) {
    trip1.push(Object.values(ptNetwork)[originLineIndex][x]);
  }
  console.log(trip1);
}


// if richmond is after destination
if (destinationLineObjectIndex >= destinationIntersectionNodeIndex){
  for (var x = destinationIntersectionNodeIndex; x <= destinationLineObjectIndex; x++) {
    trip2.push(Object.values(ptNetwork)[destinationLineIndex][x]);
    // trip2.concat([Object.values(ptNetwork)[destinationLineIndex][x]]);
    // var stop = Object.values(ptNetwork)[destinationLineIndex][x];
    // var stopString = stop.toString();
    // trip2.push(stopString);
  }
  // console.log(stop);
  // console.log(stopString);
  console.log(trip2);
}
else {
    for (var x = destinationLineObjectIndex; x <= destinationIntersectionNodeIndex; x++) {
    trip2.push(Object.values(ptNetwork)[destinationLineIndex][x]);
    // var stop = Object.values(ptNetwork)[destinationLineIndex][x];
    // var stopString = stop.toString();
    // trip2.push(stopString);
    // trip2.concat([Object.values(ptNetwork)[destinationLineIndex][x]]);
  }
  console.log(trip2);
}

var numStops = trip1.length + trip2.length;

// test
console.log(Object.values(ptNetwork)[destinationLineIndex][1]);


console.log( 'Origin: '+ origin + '\n' + 'Destination: '+ destination + '\n' + '\n' +
            origin + ' '+trip1 +' '+ trip2 + ' '+destination +'\n' + numStops + ' stops total.');
