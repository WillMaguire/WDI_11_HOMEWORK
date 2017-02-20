

// var alamein= ["Flinders Street", "Richmond", "East Richmond", "Burnley", 
//               "Hawthorn", "Glenferrie"];
// var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", 
//                    "Richmond", "Kooyong", "Tooronga"];
// var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahran", 
//                    "Windsor"];


// var travel = function(origin, destination){
// 	var route=[];
// 	var routeIndexNo = [];

// 	for(var i = 0; i < alamein.length ; i++ ){
		
// 		if((origin == alamein[i]) || (destination == alamein[i])){
// 			routeIndexNo.push(i);
// 		}
// 	  }
// 	return route;
// }

// console.log(travel("Flinders Street", "Burnley").join(" ----> "));

var trainline= [
				{alamein : ["Flinders Street", "Richmond", "East Richmond", "Burnley", 
              				"Hawthorn", "Glenferrie"]},
				{glenWaverly : ["Flagstaff", "Melbourne Central", "Parliament", 
                 			    "Richmond", "Kooyong", "Tooronga"]},
				{sandringham : ["Southern Cross", "Richmond", "South Yarra", "Prahran", 
                                "Windsor"]},
                ];

               

var origin = "Burnley";
var destination = "Prahran";

var originIndexNo;
var destiIndexNo;


var tripOrigin = 'Invalid';
var tripDesti;

// straingt trip origin
for(var i = 0 ; i < trainline[0].alamein.length ; i++){

	if(origin == trainline[0].alamein[i]){

		originIndexNo = trainline[0].alamein.indexOf(origin);
		tripOrigin = trainline[0].alamein[originIndexNo];

	}else if(origin == trainline[1].glenWaverly[i]){

		originIndexNo = trainline[1].glenWaverly.indexOf(origin);
		tripOrigin = trainline[1].glenWaverly[originIndexNo];

	}else if(origin == trainline[2].sandringham[i]){
		
		originIndexNo = trainline[2].sandringham.indexOf(origin);
		tripOrigin = trainline[2].sandringham[originIndexNo];
	}

// straingt trip,Destination 
	if(destination == trainline[0].alamein[i]){

		destiIndexNo = trainline[0].alamein.indexOf(destination);
		tripDesti = trainline[0].alamein[destiIndexNo];

	}else if(destination == trainline[1].glenWaverly[i]){

		destiIndexNo = trainline[1].glenWaverly.indexOf(destination);
		tripDesti = trainline[1].glenWaverly[destiIndexNo];

	}else if(destination == trainline[2].sandringham[i]){
		
		destiIndexNo = trainline[2].sandringham.indexOf(destination);
		tripDesti = trainline[2].sandringham[destiIndexNo];
	}
    
	//	 else{
	// 	tripOrigin= "Invalid Origin";
	// }

}

console.log(tripOrigin + " " + tripDesti);



















//===================================================================================

// var trip;

// // alamein line trip only
// // straingt
// for(var i = 0 ; i < trainline[0].alamein.length ; i++){

// 	if((origin == trainline[0].alamein[i])|| (destination == trainline[0].alamein[i])){
		
// 		originIndexNo = trainline[0].alamein.indexOf(origin);
// 		destiIndexNo = trainline[0].alamein.indexOf(destination);

// 		trip = trainline[0].alamein.slice(originIndexNo, destiIndexNo + 1);
	
// // Reverse
// // trip.reverse();
//    }
// }

// // glenWaverly line trip only
// // straingt
// for(var i = 0 ; i < trainline[1].glenWaverly.length ; i++){

// 	if((origin == trainline[1].glenWaverly[i]) || (destination == trainline[1].glenWaverly[i])){

// 		originIndexNo = trainline[1].glenWaverly.indexOf(origin);
// 		destiIndexNo = trainline[1].glenWaverly.indexOf(destination);

// 		trip= trainline[1].glenWaverly.slice(originIndexNo, destiIndexNo + 1);
// 	}
// }

// 		// sandringham line trip only
// 		// straingt
// for(var i = 0 ; i < trainline[2].sandringham.length ; i++){

// 	if((origin == trainline[2].sandringham[i]) || (destination == trainline[2].sandringham[i])){

// 		originIndexNo = trainline[2].sandringham.indexOf(origin);
// 		destiIndexNo = trainline[2].sandringham.indexOf(destination);

// 		trip= trainline[2].sandringham.slice(originIndexNo, destiIndexNo + 1);
// 	}
// }

// console.log(trip.join(" -----> "));



var trainLines = [
	{ name: 'Alamein',
	  stations: [1, 2, 3]
	},
	{ name: 'Glen Waverley',
	  stations: [4, 5, 6, 7]
	},
	{
	  name: 'Sandringham',
	  stations: [8, 9, 10, 11, 12]
	}
];

for (var line = 0; line < trainLines.length; line++) {
,	for (var station = 0; station < trainLines[line].stations.length; station++) {
		console.log(station.join(', '));
	}
}