// Let's require/import the http module
var express = require('express');
var app = express();

// Let's define a port we want to listen to
app.set('port', (process.env.PORT || 8080));

// Write main homepage route
app.get('/', function (request, response) {
  response.send('Hello World!');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port: ', app.get('port'));
})
