var express = require('express');
var request = require('request');
var path = require('path');
var engine = require('ejs-mate');
var _ = require('underscore');
var app = express();
var bodyParser = require('body-parser');

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
var images = ["https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/1700/thumb_HEADSHOTS__2001_.jpg",
              "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/10879/thumb_Profile__1_.jpg"];

app.set('views', path.join(__dirname,'views'));
// app.set('views', '/views')
// what kind of templates?
app.engine('ejs', engine); // alternate to handlebars
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req, res) {
  var randomCompliment = _.sample(compliments);
  var randomColors = _.sample(colors);
  var randomImage = _.sample(images)
  res.render('home', {
    compliments: randomCompliment,
    colors: randomColors,
    images: randomImage
  });
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

app.get('/add/compliment', function name(req, res) {
  res.render('compliment', {
   name: name,
   compliments: compliment,
   colors: randomColors
  });
});

app.post('/add/compliment', urlencodedParser, function name(req, res) {
  var output = req.body.compliment;
  res.end(JSON.stringify(req.body));
  compliments.push(output);
  console.log(output);
  res.render('compliment', {
   name: name,
   compliment: req.body,
   colors: randomColors
  });
});

// app.post('/add/compliment', function(req, res)

module.exports = app;
