console.log("train station.js connected!");
//variables
var intersectStation = "Richmond";
var originStation = "Flinders Street";
var originLine = "";
var destLine = "";
var destinationStation = "Toronga";
var destinationLineName ="";
var stationStops = 0;


//station
  var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'] ;
  var glenWaverley = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
  var sandringham = ['Tooronga', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];



//identify the origin location

if (alamein.indexOf(originStation) != -1 ) {

  var originNum = alamein.indexOf(originStation);
  originLine = "alamein";
} else if (glenWaverley.indexOf(originStation) != -1) {
  var originNum = glenWaverley.indexOf(originStation);
  originLine = "glenWaverley";
} else if (sandringham.indexOf(originStation) != -1)  {
  var originNum = sandringham.indexOf(originStation) ;
  originLine = "sandringham";
}

//identify the destination location
if (alamein.indexOf(destinationStation) != -1 ) {
  var destinationNum = alamein.indexOf(destinationStation);
  destLine = "alamein";
} else if (glenWaverley.indexOf(destinationStation) != -1) {
  var destinationNum = glenWaverley.indexOf(destinationStation);
  destLine = "glenWaverley";
} else if (sandringham.indexOf(destinationStation) != -1)  {
  var destinationNum = sandringham.indexOf(destinationStation) ;
  destLine = "sandringham";
}

//console log the origin and destination including index numbers.
console.log("Origin: " + originStation +" " + originNum );
console.log("Destination: " + destinationStation +" " + destinationNum );

//identify the intersection origin
if (originLine === "alamein") {
  var richLocOrigin = alamein.indexOf(intersectStation);

} else if (originLine === "glenWaverley") {
  var richLocOrigin = glenWaverley.indexOf(intersectStation);

} else if (originLine === "sandringham")  {
  var richLocOrigin = sandringham.indexOf(intersectStation); ;

}
console.log(richLocOrigin);

//identify the intersection of destination
//identify the intersection origin
if (destLine === "alamein") {
  var richLocDest = alamein.indexOf(intersectStation);

} else if (destLine === "glenWaverley") {
  var richLocdest = glenWaverley.indexOf(intersectStation);

} else if (destLine === "sandringham")  {
  var richLocDest = sandringham.indexOf(intersectStation); ;

}
console.log("origin richmond stops: " + richLocOrigin);
console.log("destination richmond stops: " +richLocDest);
stationStops = ((originNum +1) + (destinationNum+1));
console.log("orgin to richmond =" + stationStops);

//confirm the number of stations between Origin and Richmond
//
// if (stationStops < 0) {
//
//   stationStops = richLocation - (originNum + destinationNum);
// } else {
//   stationStops;
// }

//print origin to destination station
//
//
console.log("Origin: " + originStation + "\n\n" + "Destination: " + destinationStation + "\n\n" + stationStops + " stops total");
