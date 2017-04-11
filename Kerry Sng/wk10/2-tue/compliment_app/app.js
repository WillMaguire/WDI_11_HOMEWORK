
var express = require('express')
var _ = require('underscore')
var app = express();
var path = require('path');
var request = require('request')
var engine = require('ejs-mate')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static( path.join(__dirname, 'public')))


app.engine('ejs', engine);
app.set('view engine', 'ejs')

app.get('/:name', function(req, res) {

  var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
  ];

  var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

  res.render('home', {
    compliments: _.sample(compliments),
    color: _.sample(colors)
  });
  res.send(req.params.name);

});




module.exports = app;
