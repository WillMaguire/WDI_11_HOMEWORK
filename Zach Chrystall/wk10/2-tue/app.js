
const _ = require('underscore');
const request = require('request');
const express = require('express');
const path = require('path'); // helps me build paths
var engine = require('ejs-mate');
var app = express();

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]



app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', compliment);
app.get('/:name', compliment)

function compliment(req, res) {
  console.log(!!req.params.name);
  if (!!req.params.name) {
    name = req.params.name;
  } else {
    name = '';
  }
  res.render('home', {
    compliment: _.sample(compliments),
    color: _.sample(colors),
    name: name
  });
}



module.exports = app;
