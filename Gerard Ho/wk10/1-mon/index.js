var http = require('http');
var request = require('request');


//callback - has a signature - request & response is passed into it
var app = function(req, res){
  var urlPath = req.url
  if(urlPath==='/'){
    request('http://www.omdbapi.com/?t=jaws').pipe(res);
  }else{
    res.end('Page Not Found')
  }
}

//web/http server, your app is just a callback
var server = http.createServer(app);
server.listen(8000, function(){
  console.log('Server started on port 8000')
});
