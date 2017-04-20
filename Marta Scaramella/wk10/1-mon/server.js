//make a get request to ombd to get jaws
//display the json in the browser

//to make a request to use the 'request' module
// GET '/' to return jaws json
// https://github.com/request/request
// npm init
// npm install request --save
// you will need http and request

var http = require('http');
var request = require('request');


var app = function(req, res){
  var method = req.method;
  var url = req.url;

  if(method == 'GET' && url == '/'){
    request('http://omdbapi.com/?t=jaws', function(error, response, body){
      res.write(body);
      res.end();
    });
  };
};

server = http.createServer(app);
server.listen(8000);
