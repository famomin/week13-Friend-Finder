//dependencies
var path = require("path");

// ROUTING
module.exports = function(app) {

  //root route for home page
  app.get('/', function(req, res) {
  	res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  // /survey route to let user fill out survey
  app.get('/survey', function(req, res) {
  	res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
  	res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
};
