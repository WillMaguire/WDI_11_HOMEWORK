// make a get request to omdb to get jaws
// display the json in a browser

// you will need
// http, request

// to make a request use the 'request' module
// GET '/' to return jaws json
// https://github.com/request/request
// npm init --yes
// npm install request -- save

var http = require('http');

var app = function (req, res) {
  if (req.url === '/'){
    res.write('OMDB Connected ....');
    // console.log(req);

    const request = require('request');

    request('http://www.omdbapi.com/?s=jaws', function(err, response, body) {
      result = response.body;
      console.log(result);
    });


    // const request = require('request');
    //
    // const options = {
    // url: 'http://www.omdbapi.com/?',
    // method: 'GET',
    // headers: {
    //     'Accept': 'application/json',
    //     'Accept-Charset': 'utf-8',
    //     's': 'jaws'
    //   }
    // };
    //
    // request(options, function(err, res, body) {
    //   let json = JSON.parse(body);
    //   console.log(json);
    // });

    res.end();
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  };
};




var server = http.createServer(app);
server.listen(8000);
