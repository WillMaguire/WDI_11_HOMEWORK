var express = require('express');
var request = require('request');
var path = require('path');
var app = express();
var engine = require('ejs-mate');
var _ = require('underscore');
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var compliments =  [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

function home(req, res){
  var randomCompliment = _.sample(compliments);
  var randomColor = _.sample(colors);

  res.render('home', {
    compliment: randomCompliment,
    color: randomColor
  });

  app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('/', {
      newCompliment: JSON.stringify(req.body.newCompliment, null, 2),
    })
    res.write('you posted:\n')
    res.end()
  });

};

function name(req, res){
  var randomCompliment = _.sample(compliments);
  var randomColor = _.sample(colors);
  var name = req.params.name;

  res.render('name', {
    compliment: randomCompliment,
    color: randomColor,
    name: name
  });
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.post('/newCompliment', function(req, res) {
//   console.log(req.body.newCompliment);
//   res.send('You sent the name "' + req.body.newCompliment + '".');
// });

app.get('/', home);
app.get('/:name', name);

module.exports = app;
