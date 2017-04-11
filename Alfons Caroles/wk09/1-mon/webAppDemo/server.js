// http !!!!! node we love http

var http = require('http');

// callback - has a signature - request & response is passed in to it
var app = function(request, response) {
  console.log(new Date()); // server logs
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('who is there?');
  response.end();
}

//web server
var server = http.createServer(app);
server.listen(8000);
