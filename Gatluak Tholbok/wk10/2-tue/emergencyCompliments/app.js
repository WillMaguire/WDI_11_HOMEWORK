var express = require('express');
var request = require('request');
var _ = require('underscore'); // npm install underscore
var path = require('path');
var engine = require('ejs-mate');

var app = express();


app.set('views', path.join(__dirname, 'views'))
app.use(express.static( path.join(__dirname, 'public') ) )

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  res.render('home', {
    compliment: _.sample(compliments),
    color: _.sample(colors)
  })
})





module.exports = app;
