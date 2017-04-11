
// a route
// /about
// response for this route
// just strings 'about me'

//second route
// /donate
// response for this route
// a file that contain html

// modules needed
// http, fs, optionally url
// http.createServer()
// fs.readFile()
// url.parse() optional


// http !!!!! node we love http

var http = require('http');
var fs = require('fs');
var url = require('url');

// callback - has a signature - request & response is passed in to it
var app = function(req, res) {
  if (req.url == '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('about me');
    res.end();
  } else if (req.url == '/donate') {
    fs.readFile('donate.html', function(err, data){
      if (err) {
        console.log('error reading file');
      }
      res.write(data);
      res.end();
    });
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
