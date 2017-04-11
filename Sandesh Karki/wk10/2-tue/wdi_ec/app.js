var express = require('express');
var app = express();
var path = require('path');
var app = express();
var engine = require('ejs-mate');
var _ = require('underscore');

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('views' , path.join(__dirname, 'views'));
app.use( express.static( path.join(__dirname, 'public')));

app.engine('ejs', engine);
app.set('view engine' , 'ejs');

app.get('/' , function(req, res){
  var randComp = _.sample(compliments);
  var randColor = _.sample(colors);
  console.log(randColor);

  res.render('home', {
        compliment: randComp,
        color: randColor
      });
});

app.get ('/:name', function(req, res){
  var randComp = _.sample(compliments);
  var randColor = _.sample(colors);
    var name = req.params.name;
    var capName = name.charAt(0).toUpperCase() + name.slice(1);
    if (capName === 'Dt'){
      res.render('dt_page',{
        compliment: randComp,
        name: capName
      });
    };
    res.render('home' , {
      compliment: randComp,
      color: randColor,
      name: capName
    })
})


module.exports = app;
