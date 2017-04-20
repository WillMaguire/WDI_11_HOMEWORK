var express = require('express');
var request = require('request');
var engine = require('ejs-mate');
var bodyParser = require("body-parser");
var _ = require('underscore');
var path = require('path'); //help me build directory paths
var app = express();

//where are the templates?
app.set('views', path.join(__dirname, 'views'))
// what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//body-parser code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  res.render('home')
});

app.post('/', function(req, res){
    var info = req.body
    console.log(info)
    var comp = ({
         name: info.firstname,
         comp: info.comp
      });
      compliments.push(info.comp)
    res.render('home', { comp, compliments })
});

console.log(compliments)

module.exports = app;
