var userdata = require("..data/friends");

module.exports = function(app) {
  // when /api/tables is visited, display the Friends available array
  app.get('/api/tables', function(req, res) {
  	res.send(peopleAvail);
  });

  app.post('/api/tables', function(req, res) {
  	res.send(peopleAvail);
  });
};
