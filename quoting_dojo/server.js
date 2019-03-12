
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//database 
mongoose.connect('mongodb://localhost/quotesdb');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'


app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
            console.log('here you go');
            }
    res.render('index');
    });
});


app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
        if(err) {
        console.log('something went wrong');
        } else { 
        console.log('successfully added a user!');
        }
    res.redirect('/result');
    })
})

app.get('/result', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
            console.log('here you go');
            res.render('quotes', {users:users});
            }
    });
});

app.listen(8000, function() {
});