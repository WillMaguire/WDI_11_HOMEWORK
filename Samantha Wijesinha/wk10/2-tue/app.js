var express = require('express');
var request = require('request');
var engine = require('ejs-mate');

var _ = require('underscore');
var path = require('path'); //help me build directory paths
var app = express();

//where are the templates?
app.set('views', path.join(__dirname, 'views'))
// what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.get('/', function(req, res){

  var compliment = _.sample(compliments)
  var color = _.sample(colors)
  res.render('home', { compliment, color })

});

app.get('/:name', function(req, res){
  var name = req.params.name

  var compliment = _.sample(compliments)
  var color = _.sample(colors)
  res.render('home', { compliment, name, color })

})

module.exports = app;
