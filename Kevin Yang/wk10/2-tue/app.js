var express = require('express');
var path = require('path'); // help me build paths dir s
var request = require('request');
var app = express();
var engine = require('ejs-mate')

app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs')

app.get('/', function(req,res){
  res.render('home')
});

app.get('/:name', function (req,res){
  var username = req.params.name;
  res.render('personalize',{
    uName: username
  })
})

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

module.exports = app,compliments, colors;
