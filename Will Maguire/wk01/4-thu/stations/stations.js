// lines is a array of objects containing name(string) and stations(array of strings)
//name: & stations: are 'keys'
var lines = [ { name: 'alamain',
                stations:['Flinders Street',
                          'Richmond',
                          'East Richmond',
                          'Burnley',
                          'Hawthorn',
                          'Glenferrie']},
              { name: 'glenWaverly',
                stations:['Flagstaff',
                          'Melbourne Central',
                          'Parliament',
                          'Richmond',
                          'Kooyong',
                          'Tooronga']},
               { name: 'sandringham',
                 stations:['Southern Cross',
                           'Richmond',
                           'South Yarra',
                           'Prahran',
                           'Windsor']}];

var rich = "Richmond";
var origin = prompt('What is your location?');
var destination = prompt('what is your destination?');
var originData = { lineIndex: null,
                   name: null,
                   stationIndex: null,
                   connectionIndex: null };
var destinationData = { lineIndex: null,
                        name: null,
                        stationIndex: null,
                        connectionIndex: null};

//WORK WITH A NULL OBJECT!!!
