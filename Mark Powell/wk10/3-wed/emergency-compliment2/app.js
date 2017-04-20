var express = require('express');
var _ = require('underscore');
var request = require('request');
var path = require('path');
var app = express();
var engine = require('ejs-mate');
var bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views') );
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use( express.static( path.join(__dirname, 'public' )));

function index(req, res){
  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  var color = _.sample(colors);

  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];
  var compliment = _.sample(compliments);
  // var newCompliment =
  var message = req.params.name ? `, ${req.params.name}!` : '!';

  res.render('index', { color, compliment, message } );
}
app.get('/', index);

app.post('/new', function(res, req, error){
  console.log(req.body);
  // console.log(res);
});

app.get('/:name', index);

// make App available in server.js
module.exports = app;
