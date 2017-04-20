// make a get request to omdb to get jaws
// display the json in the browser

//to make a request to user the 'request' module
//GET '/' to return jaws json
//http://github.com/request/request
//npm init
//npm

//you will need
//http, request

var http = require('http'),
request = require('request');

var r = request.defaults({'proxy':'http://www.omdbapi.com/'})

http.createServer(function (req, resp) {
  if (req.url === '/') {
    r.get('http://www.omdbapi.com/?s=jaws').pipe(resp)
  }
}).listen(8888)
