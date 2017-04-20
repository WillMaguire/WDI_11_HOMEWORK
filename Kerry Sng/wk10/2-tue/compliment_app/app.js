
var express = require('express')
var _ = require('underscore')
var app = express();
var path = require('path');
var engine = require('ejs-mate')
var bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static( path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine('ejs', engine);
app.set('view engine', 'ejs')


var compliments = [
"Your instructors love you",
"High five = ^5",
"Is it Ruby Tuesday yet?",
"It's almost beer o'clock",
"The Force is strong with you"
];

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]


app.get('/:name', function(req, res) {

    var username = req.params.name

    res.render('home', {
      compliments: _.sample(compliments),
      color: _.sample(colors),
      name: username
    });

});

app.post('/:name', function(req, res) {
  var userCompliments = req.body.compliments;
  compliments.push(userCompliments);

  db.none('insert into comment(name, message)' + 'values(${name}, ${message})'
          ,req.body).then(function() {
            res.status(200)
            .json({
              status: 'success',
              message: 'created one compliment'
            })
          })
});


module.exports = app;
