//make a get request to omdb to get jaws and
//display json in the browser
//to make a request , use the 'request' module
//https://github.com/request/request
//npm init //creates the json pacakge file
// npm install request --save //install request and add to json package mgr

var http = require('http');
var request = require('request');

var app = function(req,response){
  if (request.method === 'GET' && request.url === '/'){
    request.get('http://www.omdbapi.com/?t=jaws').pipe(response);
  } else {
    response.writeHead(404,{'Content-Type':'text/html'});
    response.write('Error, Not Found!');
    response.end();
  }
}

var server = http.createServer(app);
server.listen(8080);
