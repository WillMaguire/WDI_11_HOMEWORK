// make a get request to omdb to get jaws
// display the json in the browser

// you will need
// http, request

// to make a request to use 'request' module
// GET '/' to return jaws json
// https://github.com/request/request
// npm init --yes
// npm install request --save

var http = require('http');
var request = require('request');

var app = function(req, res) {
  if (req.method === 'GET') request('http://www.omdbapi.com/?t=jaws').pipe(res);
};

var server = http.createServer(app);
server.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});
