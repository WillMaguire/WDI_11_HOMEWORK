console.log("train station.js connected!");
//variables
  var intersectStation = "Richmond";
  var originStation = "Flagstaff";
  var destinationStation = "Tooronga";

//station, key/value pairs

  var trainLine = [
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
    stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  ];

	function indexNoOriginStation (trainLine, originStation) {

    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].stations.length; y++) {
            if (trainLine[x].stations[y] === originStation) {
              var originStationInd = y;

            }//if statement close
        }//inner for loop close
      }//outer for loop close

      return originStationInd
  }

  var originStationIndex = indexNoOriginStation(trainLine, originStation);

   function indexNoOriginLine (trainLine, originStation) {

     for (var x = 0; x < trainLine.length; x++) {
         for (var y = 0; y < trainLine[x].stations.length; y++) {
             if (trainLine[x].stations[y] === originStation) {
               var originStationLineInd = x;
             }//if statement close
         }//inner for loop close
       }//outer for loop close

       return originStationLineInd
  };
  var originLineIndex = indexNoOriginLine(trainLine, originStation);

	function indexNoDestStation (trainLine, destinationStation) {

    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].stations.length; y++) {
            if (trainLine[x].stations[y] === destinationStation) {
              var destStationInd = y;
            }//if statement close
        }//inner for loop close
      }//outer for loop close
      return destStationInd
  }

  var destStationIndex = indexNoDestStation(trainLine, destinationStation);

	function indexNoDestLine (trainLine, destinationStation) {
    for (var x = 0; x < trainLine.length; x++) {
        for (var y = 0; y < trainLine[x].stations.length; y++) {
            if (trainLine[x].stations[y] === destinationStation) {
              var destStationLineInd = x;
            }//if statement close
        }//inner for loop close
      }//outer for loop close

      return destStationLineInd
 };
  var destLineIndex = indexNoDestLine(trainLine, destinationStation);

	function calcOriginToIntersect (originLineIndex, originStationIndex, intersectStation) {

    for (var i = 0; i < trainLine[originLineIndex].stations.length; i++) {

      if (trainLine[originLineIndex].stations[i] === intersectStation) {
          var originIntersectInd = i;
      }
    }
    return originIntersectInd
  }
  var originToRichmond = calcOriginToIntersect(originLineIndex, originStationIndex, intersectStation);

	function calcDestToIntersect (destLineIndex, destStationIndex, intersectStation) {
    for (var i = 0; i < trainLine[destLineIndex].stations.length; i++) {

      if (trainLine[destLineIndex].stations[i] === intersectStation) {
          var destIntersectInd = i;
      }
    }
    return destIntersectInd
    }

  var destToRichmond = calcDestToIntersect(destLineIndex, destStationIndex, intersectStation);

  function calculateStops (originToRichmond, destToRichmond) {


    if (originToRichmond-destToRichmond < 0) {
        var stationStops = destToRichmond-originToRichmond;
    } else {
      var stationStops = originToRichmond-destToRichmond
    }
    return stationStops
  }

 var stops = calculateStops(originToRichmond, destToRichmond);


	function  printInformationToConsole (trainLine, destLineIndex, destStationIndex, originLineIndex, originStationIndex, originStation, destinationStation, stops) {



    console.log("origin: " + originStation + "\n" + "\n" + "destination: " + destinationStation + "\n" +"\n" + stops + " stops total");


  }

  printInformationToConsole(trainLine, destLineIndex, destStationIndex, originLineIndex, originStationIndex, originStation, destinationStation, stops)
