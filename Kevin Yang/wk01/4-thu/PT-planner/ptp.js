console.log('pt_planner')

var trainlines = [
  {
    line: 'Alamein',
    stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
  },
  {
    line:'Glen Waverly ',
    stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong','Tooronga']
  },
  {
    line: 'Sandringham',
    stops:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }
];

//How to represent a trainline
var commonStop = [trainlines[0].stops[1],trainlines[1].stops[3],trainlines[2].stops[1]];
var origin = prompt('Where do you want to start? i.e. Train stations');
var destination = prompt('Where would you like to go?');

var sliced = [];

// var originStop = trainlines[0].stops.indexOf(origin);
// var destinationStop = trainlines[0].stops.indexOf(destination);
//
// var arrow = ' -----> '
// var alameinStops = trainlines[0].stops;
// var glenWaveStops= trainlines[1].stops;
// var sandringhamStops = trainlines[2].stops;
//
//
// if(alameinStops.indexOf(origin) > alameinStops.indexOf(destination)){
//   alameinStops.reverse();
//   var sliced = alameinStops.slice(alameinStops.indexOf(destination), alameinStops.indexOf(origin) + 1);
// } else {
// var sliced = alameinStops.slice(alameinStops.indexOf(origin), alameinStops.indexOf(destination) + 1);
// }


var arrow = ' -----> '



for (var i = 0; i< trainlines.length; i++){
  var trainStops = trainlines[i].stops;
  var originStop = trainStops.indexOf(origin);
  var destinationStop = trainStops.indexOf(destination);

  var intersection = trainlines[i].stops.indexOf(commonStop);

if (originStop >= 0 && destinationStop >= 0){
  if(trainStops.indexOf(origin) > trainStops.indexOf(destination)){
    trainStops.reverse();
    var sliced = trainStops.slice(trainStops.indexOf(destination), trainStops.indexOf(origin) + 1);
    } else {
  var sliced = trainStops.slice(trainStops.indexOf(origin), trainStops.indexOf(destination) + 1);
}
break;
}

  if (originStop >= 0) {

      if (intersection >= originStop) {
        sliced = trainStops.slice(originStop, intersection + 1).concat(sliced);
      } else {
        sliced = trainStops.slice(intersection, originStop + 1).reverse().concat(sliced);
      }
    }

    if (destinationStop >= 0) {

        if (intersection >= destinationStop) {
          sliced = sliced.concat(trainStops.slice(destinationStop, intersection).reverse());
        } else {
          sliced = sliced.concat(trainStops.slice(intersection + 1, destinationStop + 1));
        }
      }


}
// Math.abs(destinationStop - originStop)

console.log('Origin: '+ origin  +' \nDestination: '+ destination +'\n\n'+
sliced.join(arrow)+'\n\n'+(sliced.length - 1)+' stops total');
