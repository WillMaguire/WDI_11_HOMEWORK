console.log('HELLOOOO');

//Inputs

var origin = prompt ("where did your journey start");
var destination = prompt ("where do you want to go");

//Objects

// Array of objects trainlines[0].name trainlines[2].stations <----to access in the array of objects
// Array of objects with 2 key/value pairs each (name, stations)

var trainLines = [
  {
    name: 'alamein',
    stations: ['Glenferri', 'Hawthorn', 'Burnley', 'East Richmond', 'Richmond', 'Flinders St']
  },
  {
    name: 'glenWaverly',
    stations: ['Tooronga', 'Kooyong', 'Richmond', 'Parliment', 'Melbourne Central', 'Flagstaff']
  },
  {
    name: 'sandringham',
    stations: [ 'Windsor', 'Prahan', 'South Yarra', 'Richmond', 'Southern Cross']
  }
]

//CALL ORIGIN/DESTINATION STOP

//alamein
var originAlamein = trainLines[0].stations.indexOf(origin);
var inAlameinLine = trainLines[originAlamein];
var destinationAlamein = trainLines[0].stations.indexOf(origin);
var outAlameinLine = trainLines[destinationAlamein];


//Glen Waverly
var originGlenWaverly = trainLines[1].stations.indexOf(origin);
var inGlenWaverlyLine = trainLines[originGlenWaverly];
var destinationGlenWaverly = trainLines[1].stations.indexOf(origin);
var outGlenWaverlyLine = trainLines[destinationGlenWaverly];

//Sandringham
var originSandringham = trainLines[2].stations.indexOf(origin);
var inSandringhamLine = trainLines[originSandringham];
var destinationSandringham = trainLines[2].stations.indexOf(origin);
var outSandringhamLine = trainLines[destinationSandringham];

var commonStop = 'Richmond';


//Find which line is the origin

if (origin === inAlameinLine) {
  var originLine = 'alamein'
} else if (origin === inGlenWaverlyLine) {
  var originLine = 'glenWaverlyLine'
}

for (var i = 0; i < array.length; i++) {
  array[i]
}

//Find which line is the destination
