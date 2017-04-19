// make a request to omdb to get jaws
// display the json in the browser

// to make a request use the 'request' module
// https://github.com/request/request
// npm init
// npm install request --save

const http = require('http');
const request = require('request');

var app = function(req, res) {
  request('http://www.omdbapi.com/?t=jaws', function (error, response, body) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(body);
    res.end();
  });
};

var server = http.createServer(app);
server.listen(8000);
