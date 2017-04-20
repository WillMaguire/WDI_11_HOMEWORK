var http = require('http');
const PORT = 9000;
app = require('./app');

server = http.createServer(app);
server.listen(PORT);
server.on('listening', function(){
  console.log('Server started at ' + PORT );
});
