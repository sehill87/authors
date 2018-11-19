var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
const session = require('express-session');

var app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(session({
    secret: 'thisisasecret',
    reserve: false, 
    saveUninitialized: true,
    cokie: { maxAge: 60000 }
}));

require('./server/config/mongoose.js')
require('./server/models/author.js')
require('./server/controllers/authors.js')
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})