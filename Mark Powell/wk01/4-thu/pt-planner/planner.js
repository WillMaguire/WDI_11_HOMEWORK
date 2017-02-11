// console.log("train's leaving..!");
var trainlines = [
  // Only using capitalized keys because they are names!
  ['Flagstaff','Melbourne Central', 'Parliament','Richmond','Kooyong','Tooronga'],
  ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'],
  ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
];

// Find stations between start and richmond
for (var i = 0; i < trainlines.length; i++) {

  if (trainlines[i].indexOf('Parliament') !== -1 ) {
    // find start stations index in the array - count it against the Richmond in that array
    // return the stations in between the start and Richmond
    var indexStart = trainlines[i].indexOf('Parliament');
    var richmondArray = trainlines[i];
  }
  console.log(indexStart + " in the array: " + richmondArray);
}
//
// for (var i = 0; i < trainlines.length; i++) {
//   if (trainlines[i].indexOf('Burnley') !== -1 ) {
//
//     console.log("Array containing Burnley: " + i); // index of Array that contains Burnley
//     console.log("Index of Burnley in that array: " + trainlines[i].indexOf('Burnley')); // Index
//     // find start stations index in the array - count it against the Richmond in that array
//     // return the stations in between the start and Richmond
//   }
// }
