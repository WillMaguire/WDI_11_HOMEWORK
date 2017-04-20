var http = require('http');
const PORT = 8000; // this is never going to change within my app when it is declared with a constant variable
var app = require('./app');


var server = http.createServer(app);
server.listen(PORT);
server.on('listening', function() {
  console.log('server started at '+ PORT);
});
