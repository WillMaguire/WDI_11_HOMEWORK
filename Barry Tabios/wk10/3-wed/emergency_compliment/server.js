var http = require('http');
const PORT = 8000; // upper case becuase its in constance - will never change.
var app = require('./app');

var server = http.createServer(app);
server.listen(PORT);
server.on('listening', function() {
  console.log('server started at ' + PORT);
});
