var express = require('express');
var request = require('request');
var _ = require('underscore');
var path = require('path'); //help me build paths dir s
var app = express();
var engine = require('ejs-mate');


var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
//where are the templates
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');

//link the css
app.use(express.static( path.join(__dirname,'public' ) ) );

app.get('/:name',function(req,res){
  res.render('name',{ namae_wa: req.params['name'],
  compliment: _.sample(compliments),
  color: _.sample(colors) } );
});

//what kind of templates
app.get('/',function(req,res){
  res.render('home', {
      compliment: _.sample(compliments),
      color: _.sample(colors)
  });
});

module.exports = app;
