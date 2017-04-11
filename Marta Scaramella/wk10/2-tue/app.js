var express = require('express');
var request = require('request');
var path = require('path');
var app = express();
var engine = require('ejs-mate');

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

function home(req,res){

  var compliments = {
    1: "Your instructors love you",
    2: "High five = ^5",
    3: "Is it Ruby Tuesday yet?",
    4: "It's almost beer o'clock",
    5: "The Force is strong with you"
  }

  var colors = {
    1: "#FFBF00",
    2: "#0080FF",
    3: "#01DF3A",
    4: "#FF0080"
  }

  var i = Math.floor((Math.random() * 4) + 1);
  var randomColor = colors[i];

  console.log(compliments);
  console.log(randomColor);

  res.render('home',{
    data: compliments,
    color: randomColor
  });
};

function homeName(req,res){

  var compliments = {
    1: "Your instructors love you",
    2: "High five = ^5",
    3: "Is it Ruby Tuesday yet?",
    4: "It's almost beer o'clock",
    5: "The Force is strong with you"
  }

  var colors = {
    1: "#FFBF00",
    2: "#0080FF",
    3: "#01DF3A",
    4: "#FF0080"
  }

  var i = Math.floor((Math.random() * 4) + 1);
  var randomColor = colors[i];

  var name = req.params.name;

  res.render('home',{
    data: compliments,
    color: randomColor,
    name: name
  });
};
app.get('/', home);
app.get('/:name', homeName);
module.exports = app;
