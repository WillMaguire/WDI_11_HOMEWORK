var express = require('express');
var _ = require('underscore');
var request = require('request');
var path = require('path');
var app = express();
var engine = require('ejs-mate');

app.set('views', path.join(__dirname, 'views') );
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use( express.static( path.join(__dirname, 'public' )));

function index(req, res){
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  color = _.sample(colors);

  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  compliment = _.sample(compliments);
  res.render('index');
}
app.get('/', index);

app.get('/:name', function(req, res, error){
  name = req.params.name;
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
  color = _.sample(colors);

  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ];

  compliment = _.sample(compliments);


  res.render('index');
});

// make App available in server.js
module.exports = app;
