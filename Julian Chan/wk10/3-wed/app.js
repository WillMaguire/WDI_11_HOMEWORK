var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var engine = require('ejs-mate');
var _ = require('./helpers');
var pgp = require('pg-promise')();

var app = express();
var db = pgp({ database: 'wdi_compliments' });

// var compliments = [
//   "Your instructors love you",
//   "High five = ^5",
//   "Is it Ruby Tuesday yet?",
//   "It's almost beer o'clock",
//   "The Force is strong with you"
// ];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:name?', function(req, res) {
  db.one('SELECT $1~ FROM compliments OFFSET floor(random() * (SELECT count(*) FROM compliments)) LIMIT 1', 'body')
      .then(data => {
        res.render('index', {
          compliment: data.body,
          bgColor: _.sample(colors),
          name: req.params.name || ""
        });
      })
      .catch(error => {
        console.log('ERROR:', error);
        res.status(500).send('Internal server error');
      });
});

app.post('/compliments', function(req, res) {
  db.none({
    name: 'insert-compliment',
    text: 'INSERT INTO compliments (body) VALUES ($1)',
    values: req.body.body
  })
      .then(() => res.redirect('back'))
      .catch(error => {
        console.log('ERROR:', error);
        res.status(500).send('Internal server error');
      });
});

module.exports = app;
