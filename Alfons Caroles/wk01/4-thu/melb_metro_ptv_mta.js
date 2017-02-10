console.log("PT PLanner");

var journeyPlanner = function () {
var alamein = ['Flinders Street', 'Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'];
var glenWaverley = ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'];
var sandringham = ['Southern Cross','Richmond','South Yarra','Prahran','Windsor'];
var twoLines = alamein.concat(glenWaverley);
var allLines = twoLines.concat(sandringham);
var journey = [];
var origin = prompt("Please enter your origin station");
var destination = prompt("Please enter your destination station");

var x = false;

while (!x) {
  if (allLines.includes(origin) !== true && allLines.includes(destination) !== true) {
      origin = prompt("Please enter appropriate origin station name in Title case");
      destination = prompt("Please enter appropriate destination station name in Title case");
  } else if (allLines.includes(origin)) {
    if (alamein.includes(origin)) {
        var trainLineOrigin = alamein;
        if (alamein.includes(destination)) {
          var trainLineDestination = alamein;
        } else if (glenWaverley.includes(destination)) {
          var trainLineDestination = glenWaverley;
        } else {
          var trainLineDestination = sandringham;
        }
  } else if (glenWaverley.includes(origin)) {
        var trainLineOrigin = glenWaverley;
        if (alamein.includes(destination)) {
          var trainLineDestination = alamein;
        } else if (glenWaverley.includes(destination)) {
          var trainLineDestination = glenWaverley;
        } else {
          var trainLineDestination = sandringham;
        }
  } else {
        var trainLineOrigin = sandringham;
        if (alamein.includes(destination)) {
          var trainLineDestination = alamein;
        } else if (glenWaverley.includes(destination)) {
          var trainLineDestination = glenWaverley;
        } else {
          var trainLineDestination = sandringham;
        }
      }
  x = true;
  }
}

var indexOrigin = trainLineOrigin.indexOf(origin);
var indexDestination = trainLineDestination.indexOf(destination);
var intersectionOrigin = trainLineOrigin.indexOf('Richmond');
var intersectionDestination = trainLineDestination.indexOf('Richmond');


if (trainLineDestination !== trainLineOrigin) {
    if (indexDestination > intersectionDestination) {
        if (indexOrigin > intersectionOrigin) {
            for (i = indexOrigin; i > intersectionOrigin; i--) {
                  journey.push(trainLineOrigin[i]);
                  }
                for (j = intersectionDestination; j <= indexDestination; j++) {
                  journey.push(trainLineDestination[j]);
                }
            } else if (indexOrigin < intersectionOrigin) {
                for (i = indexOrigin; i < intersectionOrigin; i++) {
                  journey.push(trainLineOrigin[i]);
                  }
                for (j = intersectionDestination; j <= indexDestination; j++) {
                  journey.push(trainLineDestination[j]);
                }
            }
          } else if (indexDestination < intersectionDestination) {
              if (indexOrigin > intersectionOrigin) {
                  for (i = indexOrigin; i > intersectionOrigin; i--) {
                    journey.push(trainLineOrigin[i]);
                    }
                  for (j = intersectionDestination; j >= indexDestination; j--) {
                    journey.push(trainLineDestination[j]);
                  }
              } else if (indexOrigin < intersectionOrigin) {
                  for (i = indexOrigin; i < intersectionOrigin; i++) {
                    journey.push(trainLineOrigin[i]);
                    }
                  for (j = intersectionDestination; j >= indexDestination; j--) {
                    journey.push(trainLineDestination[j]);
                  }
              }
          }
} else if (trainLineDestination == trainLineOrigin){
          if (indexOrigin < indexDestination){
            for (i = indexOrigin; i <= indexDestination; i++) {
              journey.push(trainLineDestination[i]);
          }
        } else if (indexOrigin > indexDestination){
            for (j = indexOrigin; j >= indexDestination; j--) {
              journey.push(trainLineDestination[j]);
            }
          }
}
console.log(journey.join('-->'));
console.log(journey.length + ' stops total');
}
