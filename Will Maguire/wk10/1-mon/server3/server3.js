//make a get request to omdb to get jaws
//display json in browser

//to make a request\us the 'request' module
//https://githum.com/request/request
//npm init
//npm install request --save

//require http & request
var http = require('http');
var request = require('request');
//stuff to go here to create route... didn't get to it yet because I have the Plague
 var get = get('/', function(req, res, next) {
  request({
    url: 'http://www.omdbapi.com/?t=Jaws'
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(body);
      }
    }
  }
}

var server = http.createServer(get);
server.listen(8000);
