
// make a get request to omdb to get jaws
// display the json in the browser
// to make request use the 'request' module
// GET '/' to return jaws json
// https //github.com/request/request
// npm init --yes (so dont have to press enter enter..)
// npm install request --save

var http = require('http');
var request = require('request');

var app = function(req, res){
  if (req.method === 'GET' && req.url === '/movies'){
    request('http://www.omdbapi.com/?t=jaws').pipe(res);
  } else {
    res.end('200 Not Found');
  }
};

var server = http.createServer(app);
server.listen(8000, function() {
  console.log('server started at 8000')
});
