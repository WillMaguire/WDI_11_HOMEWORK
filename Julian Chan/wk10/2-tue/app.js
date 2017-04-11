var express = require('express');
var path = require('path');
var engine = require('ejs-mate');
var _ = require('./helpers');

var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:name?', function(req, res) {
  res.render('index', {
    compliment: _.sample(compliments),
    bgColor: _.sample(colors),
    name: req.params.name
  });
});

module.exports = app;
