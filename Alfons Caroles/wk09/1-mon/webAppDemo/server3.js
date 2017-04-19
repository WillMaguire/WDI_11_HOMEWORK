// make a get request to omdb to get jaws
// display json in browser



// you will need
//http, request

// to make a request to use the 'request' module
//GET '/' to return jaws json
//https://github.com/request/request
//npm init
//npm install request --save

var http = require('http');
var url = require('url');
var request = require('request');

var app = function(req, res) {
  if (req.url == '/'){
    request.get('http://omdbapi.com/?s=jaws').pipe(res);
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  }
}

//web server
var server = http.createServer(app);
server.listen(8000, function(){
  console.log('server started at 8000');
});
