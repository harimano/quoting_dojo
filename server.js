
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, './client/views'));
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

require('./server/routes.js')(app)


app.listen(8000, function() {
});