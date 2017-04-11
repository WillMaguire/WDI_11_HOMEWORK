//make a get request to omdb to get jaws
//dsiplay the json in the browser

//you will need
//http, request

//to mkae a request to use the 'request' module
//GET '/' to return jaws JSON
// 'https://github.com/request/request'
//npm init --yes
//npm install request --save

var http = require ('http');
var request = require ('request');



var app = function(req, res) {

  if (req.url === '/') {
    request('http://www.omdbapi.com/?t=Jaws').pipe(res);
    // res.end()
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  }
};

//web server
var server = http.createServer(app);
server.listen(8000);
