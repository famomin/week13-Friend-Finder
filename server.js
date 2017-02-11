// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// create the express server and assign the port
var app = express();
var PORT = 3000;

// sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//list of potential people
var peopleAvail = [];

//root route for home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// /survey route to let user fill out survey
app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// starts server to begin listening
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});