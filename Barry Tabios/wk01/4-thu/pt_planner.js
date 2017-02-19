console.log('JAVASCRIPT PT Planner');


var stations = {
  alamein : ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  glenWaverley : ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
  sandringham: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
};

var input_origin = prompt('Please enter your place of Origin');
var input_destination = prompt('please enter your desired destination');

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

var alamein_glenWaverley = [];
var alamein_sandringham = [];
var glenWaverley_alamein = [];
var glenWaverley_sandringham = [];
var sandringham_alamein = [];
var sandringham_glenWaverley = [];
var array_origin_output = [];
var array_destination_output = [];

var separator = ' ---> '


var alameinValueChangeover = 1 //stations.alamein[1];
var glenWaverleyValueChangeover = 3 // stations.glenWaverley[3];
var sandringhamValueChangeover = 1 //stations.sandringham[1];

// anchor point - changeover

var combined_lines = function(array_origin_output,array_destination_output){
    var output_array = array_origin_output.concat(array_destination_output);
  //  console.log(array_origin_output);
  //  console.log(array_destination_output);

    var output_array2 = output_array.join(separator);
    console.log(output_array2);
    console.log(output_array.length + ' stops')
};

// loops through each station and assigns origin and destination to a variable
for (i=0; i<num_of_station_lines; i++){

  for(j=0; j<stations.alamein.length; j++){
    if(stations.alamein[j] === input_origin){ // checks alamein station
      origin_index = j; // index value the origin
      origin_key_index = 0;
      origin_value_index = j;
//      console.log('alamein line origin:' + input_origin) // test console
    };
    if(stations.alamein[j] === input_destination){
      //call function for this
      destination_index = j;  // assigns index value of destination
      destination_key_index = 0;
      destination_value_index = j;
  //    console.log('alemein line destination:' + input_destination); // test console
    };
  };

  for(k=0; k<stations.glenWaverley.length; k++){
    if(stations.glenWaverley[k] === input_origin){ // checks glen waverley station
      //line = 'glen waverley'; // assigns the string glen waverley to line variable
      origin_index = k; // assigns the index value of origin
      origin_key_index = 1;
      origin_value_index = k;
//      console.log('glen waverley line origin:' + input_origin) // test console
    };
    if(stations.glenWaverley[k] === input_destination){
      destination_index = k; // assigns the index value of destination
      destination_key_index = 1;
      destination_value_index = k;
//      console.log('glen waverley line destination:' + input_destination); // test console
      // call function
    };
  };

  for(l=0; l<stations.sandringham.length; l++){
    if(stations.sandringham[l] === input_origin){ // checks sandringham station
      //line = 'sandringham'; // assigns the string sandringham to variable line.
      origin_index = l; // assigns the index value to origin
      origin_key_index = 2;
      origin_value_index = l;
//      console.log('sandringham waverley line origin:' + input_origin) // test console
    };
    if(stations.sandringham[l] === input_destination){
      destination_index = l; // assigns the index value to destination
      destination_key_index = 2;
      destination_value_index = l;
//      console.log('sandringham line destination:' + input_destination); // test console
      // call function;
    };
  };

};

// test console log
//console.log('destination key index:' + destination_key_index + ' ' + "destinatination value index:" + destination_value_index); // test console
//console.log('origin key index:' + origin_key_index + ' ' + "origin value index:" + origin_value_index); // test console


// checks to see if origin and destination are on the same station line
if (origin_key_index === destination_key_index){

  if(origin_index < destination_index){ // if the origin is lower than the station

    while(origin_index <= destination_index){

      if(origin_key_index === 0 && destination_key_index === 0){ // checke if its both origina and destination are on the same line
        trip.push(stations.alamein[origin_index]); // inserts each station to the trip array starting from origin
        //console.log('alamein console log' + origin_index);
      };

      if(origin_key_index === 1 && destination_key_index === 1){ // checks to see if they are on the same line
        trip.push(stations.glenWaverley[origin_index]); // inserts each station to the trip array starting from origin
      };

      if(origin_key_index === 2 && destination_key_index === 2){ // checks to se if they are on the same line
        trip.push(stations.sandringham[origin_index]); // inserts each station to the trip array starting from origin
      };

      origin_index++; // increments by 1 the index
  //  console.log('test');
    };
    console.log(trip);
  } else {
    while(origin_index >= destination_index){ // if the origian station is greater than the destination go back-track on the station
      //console.log(stations.alamein[origin_index]); // console logs the station from stations objects
        if(origin_key_index === 0 && destination_key_index === 0){ // checke if its both origina and destination are on the same line
          trip.push(stations.alamein[origin_index]); // inserts each station to the trip array starting from origin
        };

        if(origin_key_index === 1 && destination_key_index === 1){ // checks to see if they are on the same line
          trip.push(stations.glenWaverley[origin_index]); // inserts each station to the trip array starting from origin
        };

        if(origin_key_index === 2 && destination_key_index === 2){ // checks to se if they are on the same line
          trip.push(stations.sandringham[origin_index]); // inserts each station to the trip array starting from origin
        };

        origin_index--; // decrement the index by 1
    //console.log('test');
    };
    console.log(trip);
  };

};


// if stations origin and destiantion are not on the same line

if(origin_key_index !== destination_key_index){
  //console.log('gone into if looop')
  if(origin_key_index === 0 && destination_key_index === 1){ // alamein and glenwaverley line
    //console.log('alamein and glenwaverley station');

    if(origin_value_index > alameinValueChangeover){
      var array_origin = stations.alamein.slice(alameinValueChangeover, origin_value_index + 1);
      var array_origin_reversed = array_origin.reverse();
      array_destination_output = array_destination_reversed;
      //console.log(array_origin_reversed);
    };

    if(origin_value_index < alameinValueChangeover){
      array_origin = stations.alamein.slice(origin_value_index, alameinValueChangeover + 1);
      array_origin_output = array_origin;
      //console.log(array_origin);
    };

    if(destination_value_index > glenWaverleyValueChangeover){
      var array_destination = stations.glenWaverley.slice(glenWaverleyValueChangeover, destination_value_index);
    //  var array_destination_reversed = array_destination.reverse();
  //    console.log('test glen waverley detination');
      array_destination_output = array_destination;
      //console.log(array_destination);
    };

    if(destination_value_index < glenWaverleyValueChangeover){
      var array_destination = stations.glenWaverley.slice(destination_value_index, glenWaverleyValueChangeover);
      var array_destination_reversed = array_destination.reverse();
      array_destination_output = array_destination_reversed;
      //console.log(array_destination_reversed);
    };

    combined_lines(array_origin_output,array_destination_output);
    //alamein_glenWaverley = stations.alamein.concat(stations.glenWaverley);
    //combined_lines(alamein_sandringham);
  // if alamein and glenwaverye line
} else if (origin_key_index === 0 && destination_key_index === 2){ // alamein and sandringham line

  if(origin_value_index > alameinValueChangeover){
    var array_origin = stations.alamein.slice(alameinValueChangeover, origin_value_index + 1);
    var array_origin_reversed = array_origin.reverse();
    array_origin_output = array_origin_reversed;
    //console.log(array_origin_reversed);
  };

  if(origin_value_index < alameinValueChangeover){
    array_origin = stations.alamein.slice(origin_value_index, alameinValueChangeover + 1);
    array_origin_output = array_origin;
    //console.log(array_origin);
  }

  if(destination_value_index > sandringhamValueChangeover){
    var array_destination = stations.sandringham.slice(sandringhamValueChangeover, destination_value_index);
  //  var array_destination_reversed = array_destination.reverse();
  //console.log('test sandringham line destination');
    array_destination_output = array_destination;
    //console.log(array_destination);
  }

  if(destination_value_index < sandringhamValueChangeover){
    var array_destination = stations.sandringham.slice(destination_value_index, sandringhamValueChangeover);
    var array_destination_reversed = array_destination.reverse();
    array_destination_output = array_destination_reversed;
    //console.log(array_destination_reversed);
  }

  combined_lines(array_origin_output,array_destination_output);
  //  alamein_sandringham= stations.alamein.concat(stations.sandringham);
  //  combined_lines(alamein_sandringham);
};

  if(origin_key_index === 1 && destination_key_index === 0){ // glen waverley and alamein

    if(origin_value_index > glenWaverleyValueChangeover){
      var array_origin = stations.glenWaverley.slice(glenWaverleyValueChangeover, origin_value_index + 1);
      var array_origin_reversed = array_origin.reverse();
      array_origin_output = array_origin_reversed;

      //console.log(array_origin_reversed);
    };

    if(origin_value_index < glenWaverleyValueChangeover){
      array_origin = stations.glenWaverley.slice(origin_value_index, glenWaverleyValueChangeover + 1);
      array_origin_output = array_origin;
    //  console.log(array_origin);
    };

    if(destination_value_index > alameinValueChangeover){
      var array_destination = stations.alamein.slice(alameinValueChangeover, destination_value_index);
      //var array_destination_reversed = array_destination.reverse();
      //    console.log('test glen waverley detination');
      array_destination_output = array_destination;
      //console.log(array_destination);
    };

    if(destination_value_index < alameinValueChangeover){
      var array_destination = stations.alamein.slice(destination_value_index, alameinValueChangeover);
      var array_destination_reversed = array_destination.reverse();
      array_destination_output = array_destination_reversed;
      //console.log(array_destination_reversed);
    };

    combined_lines(array_origin_output,array_destination_output);

//    glenWaverley_alamein = stations.glenWaverley.concat(stations.alamein);
  //  combined_lines(glenWaverley_sandringham);
    // if glen waverley and alamein
  } else if (origin_key_index === 1 && destination_key_index === 2){ // glen waverley and sandringham

    if(origin_value_index > glenWaverleyValueChangeover){
      var array_origin = stations.glenWaverley.slice(glenWaverleyValueChangeover, origin_value_index + 1);
      var array_origin_reversed = array_origin.reverse();
      array_origin_output = array_origin_reversed;
      //console.log(array_origin_reversed);
    };

    if(origin_value_index < glenWaverleyValueChangeover){
      array_origin = stations.glenWaverley.slice(origin_value_index, glenWaverleyValueChangeover + 1);
      array_origin_output = array_origin;
      //console.log(array_origin);
    };

    if(destination_value_index > sandringhamValueChangeover){
      var array_destination = stations.sandringham.slice(sandringhamValueChangeover, destination_value_index);
    //  var array_destination_reversed = array_destination.reverse();
  //    console.log('test glen waverley detination');
      array_destination_output = array_destination;
      //console.log(array_destination);
    };

    if(destination_value_index < sandringhamValueChangeover){
      var array_destination = stations.sandringham.slice(destination_value_index, sandringhamValueChangeover);
      var array_destination_reversed = array_destination.reverse();
      array_destination_output = array_destination_reversed;
      //console.log(array_destination_reversed);
    };

    combined_lines(array_origin_output,array_destination_output);
    //glenWaverley_sandringham = stations.glenWaverley.concat(stations.sandringham);
    //combined_lines(glenWaverley_sandringham);
    // if glen waverley and sandringham
  };

  if(origin_key_index === 2 && destination_key_index === 0){ // sandringham and alamein line

    if(origin_value_index > sandringhamValueChangeover){
      var array_origin = stations.sandringham.slice(sandringhamValueChangeover, origin_value_index + 1);
      var array_origin_reversed = array_origin.reverse();
      array_origin_output = array_origin_reversed;
      //console.log(array_origin_reversed);
    };

    if(origin_value_index < sandringhamValueChangeover){
      array_origin = stations.sandringham.slice(origin_value_index, sandringhamValueChangeover + 1);
      array_origin_output = array_origin;
      //console.log(array_origin);
    };

    if(destination_value_index > alameinValueChangeover){
      var array_destination = stations.alamein.slice(alameinValueChangeover, destination_value_index);
    //  var array_destination_reversed = array_destination.reverse();
  //    console.log('test glen waverley detination');
      array_destination_output = array_destination;
      //console.log(array_destination);
    };

    if(destination_value_index < alameinValueChangeover){
      var array_destination = stations.alamein.slice(destination_value_index, alameinValueChangeover);
      var array_destination_reversed = array_destination.reverse();
      array_destination_output = array_destination_reversed;
      //console.log(array_destination_reversed);
    };

    combined_lines(array_origin_output,array_destination_output);

//    glenWaverley_alamein = stations.glenWaverley.concat(stations.alamein);
  //  combined_lines(glenWaverley_sandringham);
    // if glen waverley and alamein
  }  else if (origin_key_index === 2 && destination_key_index === 1){ // sandringham and glenWaverley

    if(origin_value_index > sandringhamValueChangeover){
      var array_origin = stations.sandringham.slice(sandringhamValueChangeover, origin_value_index + 1);
      var array_origin_reversed = array_origin.reverse();
      array_origin_output = array_origin_reversed;
      //console.log(array_origin_reversed);
    };

    if(origin_value_index < sandringhamValueChangeover){
      array_origin = stations.sandringham.slice(origin_value_index, sandringhamValueChangeover + 1);
      array_origin_output = array_origin;
    //  console.log(array_origin);
    }

    if(destination_value_index > glenWaverleyValueChangeover){
      var array_destination = stations.glenWaverley.slice(glenWaverleyValueChangeover, destination_value_index);
    //  var array_destination_reversed = array_destination.reverse();
    //  console.log('test glen waverley detination');
      array_destination_output = array_destination;
//      console.log(array_destination);
    };

    if(destination_value_index < alameinValueChangeover){
      var array_destination = stations.glenWaverley.slice(destination_value_index, glenWaverleyValueChangeover);
      var array_destination_reversed = array_destination.reverse();
      array_destination_output = array_destination_reversed;
    //  console.log(array_destination_reversed);
    };

    combined_lines(array_origin_output,array_destination_output);
    //sandringham_alamein = stations.sandringham.concat(stations.glenWaverley);
    //combined_lines(sandringham_alamein);
    // if sandringham and glen waverley
  };

};



//Array [ "Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor", "Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", 1 more… ]
