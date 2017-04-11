var express = require('express')
var request = require('request')
var path = require('path');
var app = express();
var engine = require('ejs-mate')

app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', home);

function home(req,res){
  res.render('home',
  { compliment: compliments[Math.floor(Math.random()*compliments.length)],
    color:colors[Math.floor(Math.random()*colors.length)]
  });
}

app.get('/:name', name);

function name(req,res){
  var user = (req.params.name)
  res.render('name',
  { username: user,
    compliment: compliments[Math.floor(Math.random()*compliments.length)]
    color: colors[Math.floor(Math.random()*colors.length)],
  });
}


module.exports = app;
