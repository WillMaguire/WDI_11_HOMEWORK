// make a get request to omdb to get jaws
// display the json in the browser

// you will need http

// to make a request to use the 'request' module
// https://github.com/request/request
// npm init
// npm install request --save

var http = require('http')
var request = require('request')


// Set the headers
var headers = {
    'Content-Type':  'text/JSON'
}

// Configure the request
var options = {
    url: 'http://www.omdbapi.com/?t=jaws&plot=full',
    method: 'GET',
    headers: headers,
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
        // res.end(JSON.stringify(body))

    }
});
// var server = http.createServer(options)
// server.listen(8000);
