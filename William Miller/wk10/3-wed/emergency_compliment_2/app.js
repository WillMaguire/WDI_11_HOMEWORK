var express = require('express')
var app = express();

var connection = {
    host: 'localhost',
    database: 'emergency_compliments'
};

var request = require('request')
var path = require('path');
var engine = require('ejs-mate')
var bodypaser = require('body-parser')
var pgp = require('pg-promise')();


app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

var db = pgp(connection);

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

app.get('/', home);

function home(req,res){
  res.render('home',
  { compliment: compliments[Math.floor(Math.random()*compliments.length)],
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

app.get('/:name', name);

function name(req,res){
  var user = (req.params.name)
  res.render('name',
  { username: user,
    compliment: compliments[Math.floor(Math.random()*compliments.length)],
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

app.post('/newcompliment',function(req,res){
  compliments.push(req.body.compliment);
  res.redirect('/')
});



module.exports = app;
