// var sandringham = ['Flagstaff','Melbourne Central', 'Parliament','Richmond','Kooyong','Tooronga'];
// var glenWaverly = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
// var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];


// array of objects
var trainlines = [
    {
    name: 'Alamein',
    stations:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  },
    {
    name: 'Glen Waverley',
    stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  },
  {
    name: 'Sandringham',
    stations: ['Tooronga', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
];

function createLeg (station){
  for(var i = 0; i < trainlines.length; i++) {
     if(trainlines[i].stations.indexOf(station) > -1 ) {
       index = i;
       stationInArray = trainlines[index].stations.indexOf(station);
       richmond = trainlines[index].stations.indexOf('Richmond');
       var tripLeg = trainlines[index].stations.slice(stationInArray, richmond);
       return tripLeg;
     }
  }
}

var createTrip = function(start, destination){
    


};
