var express = require('express');
var request = require('request');
var path = require('path');
var engine = require('ejs-mate');
var _ = require('underscore');
var app = express();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.set('views', path.join(__dirname,'views'));
// app.set('views', '/views')
// what kind of templates?
app.engine('ejs', engine); // alternate to handlebars
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  var randomCompliment = _.sample(compliments);
  var randomColors = _.sample(colors);
  res.render(_.sample(compliments));
  res.render('home', {
    compliments: randomCompliment,
    colors: randomColors
  })
});

app.get('/:name', function name(req, res) {
  var randomCompliment = _.sample(compliments);
  var randomColors = _.sample(colors);
  var name = req.params.name;
  res.render('name', {
    name: name,
    compliments: randomCompliment,
    colors: randomColors
  });
});

module.exports = app;
