console.log("train station.js connected!");
//variables
  var intersectStation = "Richmond";
  var originStation = "Hawthorn";
  var destinationStation = "Windsor";

//station, key/value pairs

  var trainLine = [
    {
    name: 'Alamein',
    station: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  },
    {
    name: 'Glen Waverley',
    station: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  },
  {
    name: 'Sandringham',
    station: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  ];

//find the  array index number of the origin STATION
	function indexNoOriginStation (trainLine, originStation) {

    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].station.length; y++) {
            if (trainLine[x].station[y] === originStation) {
              var originStationInd = y;
            }//if statement close
        }//inner for loop close
      }//outer for loop close

      return originStationInd
  };

  var originStationIndex = indexNoOriginStation(trainLine, originStation);

  //find the index number of the origin LINE
   function indexNoOriginLine (trainLine, originStation) {

     for (var x = 0; x < trainLine.length; x++) {
         for (var y = 0; y < trainLine[x].station.length; y++) {
             if (trainLine[x].station[y] === originStation) {
               var originStationLineInd = x;
             }//if statement close
         }//inner for loop close
       }//outer for loop close
       return originStationLineInd
  };
  var originLineIndex = indexNoOriginLine(trainLine, originStation);


  //find the Origin station richmond stop
    for (var i = 0; i < trainLine[originLineIndex].station.length; i++) {
      if (trainLine[originLineIndex].station[i] === intersectStation) {
          var originInstesectIndex = trainLine[originLineIndex].station.indexOf(intersectStation);
      }
    }

  //find the index number of the DESTINATION STATION
	function indexNoDestStation (trainLine, destinationStation) {

    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].station.length; y++) {
            if (trainLine[x].station[y] === destinationStation) {
              var destStationInd = y;
            }//if statement close
        }//inner for loop close
      }//outer for loop close
      return destStationInd
  }
  var destStationIndex = indexNoDestStation(trainLine, destinationStation);

//find the index number of the DESTINATION LINE
	function indexNoDestLine (trainLine, destinationStation) {
    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].station.length; y++) {
            if (trainLine[x].station[y] === destinationStation) {
              var destStationLineInd = x;
            }//if statement close
        }//inner for loop close
      }//outer for loop close
      return destStationLineInd
 };
  var destLineIndex = indexNoDestLine(trainLine, destinationStation);

  //find the destination station richmond stop
  for (var i = 0; i < trainLine[destLineIndex].station.length; i++) {
    if (trainLine[destLineIndex].station[i] === intersectStation) {
        var destIntersectIndex = trainLine[destLineIndex].station.indexOf(intersectStation);
    }
  }


  function calculateStops (destStationIndex, originStationIndex, originInstesectIndex, destIntersectIndex) {
    if (originStationIndex - originInstesectIndex < 0 ) {
      var originStops = originInstesectIndex - originStationIndex;
    } else {
      var originStops = originStationIndex - originInstesectIndex;
    }

    if (destStationIndex -destIntersectIndex < 0 ) {
      var destStops  = destIntersectIndex - destStationIndex;
    } else {
      var destStops  = destStationIndex -destIntersectIndex;
    }

      return stops = originStops+destStops
  }
  var stops = calculateStops(destStationIndex, originStationIndex, originInstesectIndex, destIntersectIndex, trainLine);

	function  printInformationToConsole (originStation, destinationStation, stops) {
    console.log("origin: " + originStation + "\n" + "\n" + "destination: " + destinationStation + "\n" +"\n" + stops + " stops total");
  }

  printInformationToConsole(originStation, destinationStation, stops);
