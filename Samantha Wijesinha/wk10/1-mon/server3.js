//make a get request to omdb to get jaws
//display the json in the browser

//to make a request use the request module

var http = require ('http');
var request = require('request');
var fs = require ('fs');

request('http://www.omdbapi.com/?t=Jaws').pipe(fs.createWriteStream("jaws.htm"));

var jaws = function(req, res) {
  fs.readFile('jaws.htm', function(err, buffer) {
    res.write(buffer.toString())
    res.end()
  });
};

var server = http.createServer(jaws);
server.listen(8000);
