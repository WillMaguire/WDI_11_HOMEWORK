var express = require('express');
var request = require('request');
var path = require('path'); // help build paths dir s
var engine = require('ejs-mate');
var app = express();
var _ = require('underscore');
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();

var connection = {
    host: 'localhost',
    port: 5432,
    database: 'emergency_compliment'
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


// where are the templates?
app.set('views', path.join(__dirname, 'views'));
// app.set('views', './views');

//what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//use a middleware -- middleware are just functions
//static asset
app.use( express.static( path.join(__dirname, 'public') ) );

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/add/compliments', function(req, res){

  res.render('compliments');

});

app.post('/add/compliments', function(req, res){

      var compliment = req.body.user.compliment;
      compliments.push(compliment);
      console.log(compliments);
      res.writeHead(301,
        {location: '/'}
      );
      res.end();
});

app.get('/', function(req, res){

      var compliObject = _.sample(compliments);
      var colorNew = _.sample(colors);

      res.render('home', {
                          colors: colorNew,
                          compliment: compliObject
                        });
});

app.get('/:name', function(req, res){

      var name = req.params.name;
      var properName = name.split(' ').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join('');
      var compliObject = _.sample(compliments);
      var colorNew = _.sample(colors);

      res.render('personalize', {
                          colors: colorNew,
                          compliment: compliObject,
                          greetName: properName
                        });
});


module.exports = app;
