console.log('JAVASCRIPT PT Planner');


var stations = {
  alamein : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverley : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var input_origin = 'East Richmond';//prompt('please enter your origin');
var input_destination = 'Glenferrie';//prompt('please enter your desired destination');

var num_of_station_lines = Object.keys(stations).length; // calculates number of stations lines
var station_length_alamein = stations.alamein.length; // calculates number of statations for alamein
var station_length_glenWaverly = stations.glenWaverley.length; // calculates number of stations in glen waverley
var station_length_sandringham = stations.sandringham.length; // calculates number of stations in sandringham

var origin_index;
var destination_index;

var origin_key_index;
var destination_key_index;
var origin_value_index;
var destination_value_index;

var origin;
var destination;
var trip = [];


var changeover = 'Richmond'; // anchor point - changeover


for (i=0; i<num_of_station_lines; i++){
  for(j=0; j<stations.alamein.length; j++){
    if(stations.alamein[j] === input_origin){ // checks alamein station
      origin_index = j; // index value the origin
      origin_key_index = 0;
      origin_value_index = j;
      console.log('alamein line origin:' + input_origin) // test console
    };
    if(stations.alamein[j] === input_destination){
      //call function for this
      destination_index = j;  // assigns index value of destination
      destination_key_index = 0;
      destination_value_index = j;
      console.log('alemein line destination:' + input_destination); // test console
    };
  };

  for(k=0; k<stations.glenWaverley.length; k++){
    if(stations.glenWaverley[k] === input_origin){ // checks glen waverley station
      //line = 'glen waverley'; // assigns the string glen waverley to line variable
      origin_index = k; // assigns the index value of origin
      origin_key_index = 1;
      origin_value_index = k;
      console.log('glen waverley line origin:' + input_origin) // test console
    };
    if(stations.glenWaverley[k] === input_destination){
      destination_index = k; // assigns the index value of destination
      destination_key_index = 1;
      destination_value_index = k;
      console.log('glen waverley line destination:' + input_destination); // test console
      // call function
    };
  };

  for(l=0; l<stations.sandringham.length; l++){
    if(stations.sandringham[l] === input_origin){ // checks glen waverley station
      //line = 'sandringham'; // assigns the string sandringham to variable line.
      origin_index = l; // assigns the index value to origin
      origin_key_index = 2;
      origin_value_index = l;
      console.log('sandringham waverley line origin:' + input_origin) // test console
    };
    if(stations.sandringham[l] === input_destination){
      destination_index = l; // assigns the index value to destination
      destination_key_index = 2;
      destination_value_index = l;
      console.log('sandringham line destination:' + input_destination); // test console
      // call function;
    };
  };

};

console.log('destination key index:' + destination_key_index + ' ' + "destinatination value index:" + destination_value_index); // test console
console.log('origin key index:' + origin_key_index + ' ' + "origin value index:" + origin_value_index); // test console



if(origin_index < destination_index){ // if the origin is lower than the station
  while(origin_index <= destination_index){
  //console.log(stations.alamein[origin_index]); // console logs the station from stations objects
  trip.push(stations.alamein[origin_index]); // inserts each station to the trip array starting from origin
  origin_index++; // increments by 1 the index
//  console.log('test');
  };
  console.log(trip);
} else {
  while(origin_index >= destination_index){ // if the origian station is greater than the destination go back-track on the station
  //console.log(stations.alamein[origin_index]); // console logs the station from stations objects
  trip.push(stations.alamein[origin_index]); // inserts each station to the trip array starting from origin
  origin_index--; // decrement the index by 1
  //console.log('test');
  };
  console.log(trip);
};


//console.log(line);
//var journey = [];
//var intersection = [alamein[1],glenWaverley[3],sandringham[1]];

//var route = function(){
//  console.log('test');
//};



//console.log(origin);
//console.log(destination);
//stations.alamein(0);
