// make a get request to OMDB to get jaws
// display the json in the browser

// you will need - http and request

// to make a request, to use a 'request' module
// GET '/' to return jaws json
// https://github.com.request/request
// npm init -- yes
// npm install request --save


var http = require('http');
var request = require('request');

var app = function(req, res) {
 if (req.method === 'GET' && req.url === '/index') {
   request('http://www.omdbapi.com/?s=jaws').pipe(res);
 } else {
   res.end('404 Not Found');
 }
};

var server = http.createServer(app);
server.listen(8000, function() {
 console.log('server started at 8000')
});
