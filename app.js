// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

// Using the JSON function of the body-parser module
app.use(bodyParser.json()); 

// Route that Hipchat enters
app.post("/link", function(req, res) {

  // Gets the message value from the Hipchat JSON webhook
  var messageText = req.body.item.message.message;
  
  // Message posted back to Hipchat
  res.json({ message: `${messageText}`,
				color: 'green'   });

});

// Giving the app a port number to listen on - use 3000 by default 
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
