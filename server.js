// dependencies
var express = require('express');
var bodyParser = require('body-parser');

// create the express server and assign the port
var app = express();
var PORT = 3000;

// sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//pointing to API routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts server to begin listening
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
