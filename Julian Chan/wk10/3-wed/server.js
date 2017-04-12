var http = require('http');
const PORT = 8000;
var app = require('./app');

http.createServer(app)
  .listen(PORT)
  .on('listening', () => console.log("Server listening on port " + PORT + "..."));
