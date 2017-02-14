
   var  alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn',
                 'Glenferie']
   var  glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond',
                 'Kooyong', 'Taroonga']
   var sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']

   var allStations: alamein.concat (glenWaverly).concat(sandringham); // cannot get the line need to use object

   //var trainlines =


   //*Array containing 3 objects

   // var trainlines =
 //   {
 //     alameinLine:['Flinders Street', 'Glenferie'], //alameinLine is not a property of trainlines. It's an object. trainlines[0].alameinLine will give the trainstops in alameinLine
 //     glenWaverlyLine:['Flagstaff','Kooyong'], //It will return the values in the alameinLine. trainlines[0]["alameinLine"] will return the same values
 //     sandringhamLine:['Southern Cross']
 //   }
 // or

 // var trainlines = [
    {
      name:'alameinLine',
      stations:['Flinders Street', 'Richmond'] // trainlines[0].name *the number 0 is the index
    },
    {
      name:'glenWaverlyLine',
      stations:['Flagstaff', 'Melbourne Central']
    },
 ]


var journeyPlanner = function(originStation, destinationStation, stops)

    var returnObj = {};
    var originStation = prompt('Please state origin');
    var destinationStation   = prompt('Please state destination');
    returnObj.start = originStation;
    returnObj.end = destinationStation;

if(destinationBeforeRichmond())    {
  return destinationBeforeRichmond();
}


//alamein.indexOf("Flinders Street") find flinders in alamein
