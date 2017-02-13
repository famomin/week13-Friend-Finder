//requireing the data from friends.js file
var userData = require("../data/friends");

module.exports = function(app) {
  // when /api/tables is visited, display the Friends available array
  app.get('/api/tables', function(req, res) {
  	res.send(userData);
  });

  //push new person to the array and show it on api/tables. Applying logic for best match.
  app.post('/api/tables', function(req, res) {
    var newFriend = req.body;
    userData.push(newFriend); //pushing new friedn to api tables (array)

    var lowScore = 50; //50 imaginary number. Difference of two people is not possible to get to 50.
    var differenceScore = 0;
    var closeMatch;

    console.log((newFriend));
    //double for loop. first loop to run through each exisiting person on array.
    for (var i = 0; i < userData.length - 1; i++){
      differenceScore = 0;

      //second loop to run though all the inpus from users.
      for (var j = 0; j < userData[i].scores.length; j++ ) {
        differenceScore = differenceScore + (Math.abs(userData[i].scores[j] - newFriend.scores[j]));
      } //closing j for loop

      //checking if differenceScore is less than previous low score or not.
      if(differenceScore < lowScore){
        lowScore = differenceScore;
        closeMatch = userData[i];
      } //closing if statment
    } //closing i for loop

    res.json(closeMatch);
  }); //closing post route
}; // clsoing module.exports function
