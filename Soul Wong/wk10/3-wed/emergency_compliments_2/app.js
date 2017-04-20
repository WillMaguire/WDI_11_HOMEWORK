var express = require('express');
var request = require('request');
var _ = require('underscore');
var path = require('path');
var engine = require('ejs-mate');
var pgp = require('pg-promise')

var app = express();
var connection = {
    host: 'localhost',
    database: 'emergency_compliments'
};

var db = pgp(connection);

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: false
}));
// |
// V
app.use(bodyParser.json());
// |
// V
app.set('views',path.join(__dirname,'views'));
app.engine('ejs',engine);
app.set('view engine','ejs');
// |
// V
app.use(express.static( path.join(__dirname,'public' ) ) );
// |
// V
app.get('/:name',function(req,res){
  res.render('home',{
    namae_wa: req.params['name'],
    compliment: _.sample(compliments),
    color: _.sample(colors)
  });
});
// |
// V
app.get('/',function(req,res){
  res.render('home', {
      namae_wa: req.params['name'],
      compliment: _.sample(compliments),
      color: _.sample(colors)
  });
  console.log(db.query('SELECT * FROM compliments'));
  //console.log(typeof(db))
});
// |
// V
app.post('/newCompliment',function(req,res){
  compliments.push(req.body.compliment);
  res.redirect('/')
});

module.exports = app;
