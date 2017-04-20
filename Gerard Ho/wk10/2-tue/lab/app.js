var express = require('express');
var engine = require('ejs-mate');
var path = require('path');
var app = express();

compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

app.use(express.static(path.join(__dirname, 'public')))

function logger(req,res,next){
  console.log('%s request %s from %s',req.method, req.path,req.ip); // same as below
  console.log(`${req.method}request ${req.path} from ${req.ip}`); // same as above
  next();
}

app.use(logger);

app.set('views', path.join(__dirname, 'views')) // the views are inside the view folder good practise
// app.set('views','./views');
app.engine('ejs', engine);
app.set('view engine','ejs');

app.get('/',home);

function home(req,res){
  res.render('home', {compliment: compliments[Math.floor(Math.random()*compliments.length)],color:colors[Math.floor(Math.random()*colors.length)]});
}

app.get('/:name',name);

function name(req,res){
  var user = (req.params.name)
  res.render('name',{username: user,color:colors[Math.floor(Math.random()*colors.length)],compliment: compliments[Math.floor(Math.random()*compliments.length)]})
}


module.exports = app;
