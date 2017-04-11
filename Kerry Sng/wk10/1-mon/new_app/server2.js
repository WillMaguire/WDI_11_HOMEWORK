
// a route
// /about
// response for this route
// just strings 'about me'

// second route
// /donate
// response for this route
// a file that contains html - donate.html

// modules you will need
// http, fs, optionally url
// http.createServer()
// fs.readFile()
// url.parse() optional

var http = require('http');
var fs = require('fs');
var url = require('url'); //optional

// callback - has a signature - request & response is passed in to it
var app = function(req, res) {
  // look at the req and work out what they want
  // if req.path is '/about'
  // response will be 'about me'
  // make a response based on req
  if (req.url === '/about') {
    res.end('about me');
  }else if (req.url === '/donate') {
    fs.readFile('donate.html', function(err, buffer) {
      if (err) {
      }
    res.end(buffer.toString());
    });

  }else {
    res.writeHead(404);
    res.end('not found');
  }
}

// web server, your app is just a callback
var server = http.createServer(app);
//server start listening on request
server.listen(8000);
                                                                           cxx 
