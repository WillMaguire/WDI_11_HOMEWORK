var http = require('http');
var PORT = 8000;
app = require('./app')// do have to say app.js as it is smart enough to look for it

var server = http.createServer(app);
server.listen(PORT);
server.on('listening', function(){
  console.log('server started at' + PORT);
});
