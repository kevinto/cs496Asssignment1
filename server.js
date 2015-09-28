// Let's require/import the http module
var express = require('express');
var app = express();

// Let's define a port we want to listen to
app.set('port', (process.env.PORT || 8080));

// Write main homepage route
app.get('/', function (request, response) {
  var currentUtcTime = Date.now();
  var displayUtcTime = 'Current Utc Time: ' + currentUtcTime + '<br/>';

  var currentDateTime = new Date();
  var displayTime = "Current Local Date Time at the server: " +
                    (currentDateTime.getMonth() + 1) + "/" +
                    currentDateTime.getDate() + "/" +
                    currentDateTime.getFullYear() + " " +
                    currentDateTime.getHours() + ":" +
                    currentDateTime.getMinutes() + ":" +
                    currentDateTime.getSeconds() + '\r\n';
  response.send(displayUtcTime + displayTime);
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port: ', app.get('port'));
})
