var allLines = {
  + alamein:    ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn',
                 'Glenferie']
  + glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond',
                 'Kooyong', 'Taroonga']
  + sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

};

var journeyPlanner = function(originStation, destinationStation, stops)

    var returnObj = {};
    var originStation = prompt('Please state origin');
    var destinationStation   = prompt('Please state destination');
    returnObj.start = originStation;
    returnObj.end = destinationStation;

if(destinationBeforeRichmond())    {
  return destinationBeforeRichmond();
}
