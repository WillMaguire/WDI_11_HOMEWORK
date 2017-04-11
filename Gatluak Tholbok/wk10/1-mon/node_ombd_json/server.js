var http = require('http');
var port = 8000;
var req = require('request');

var options = {
  url: 'http://www.omdbapi.com/?s=batman',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept': 'utf-8'
  }
};

req(options, function(err, res, body) {
  console.log('request received');
  var json = JSON.parse(body);
  console.log(json);
})
var server = http.createServer(req);
server.listen(port);
