// make a GET req to OMDB to get Jaws
// display the json in the browser

// to make a request, use the request module
// github.com/request/request
// npm init
// npm install request --save
// handle as callback

var http = require('http');
var request = require('request');
var fs = require('fs');


// http://www.omdbapi.com/?t=jaws
// call back - has a signature. 'Request' and 'response' are passed in to it.
var app = function(req, res){
  var method = req.method;
  var url = req.url;

  if(method == 'GET' && url == '/'){
    request('http://www.omdbapi.com/?t=jaws', function(error, response, body){
      res.write(body);
      res.end();
    });
  }
};

// web server
server = http.createServer(app);
server.listen(5000);
