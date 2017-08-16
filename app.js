var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/user'));

app.listen(3300, function(err) {
    if (!err) console.log("listening on 3300");
});