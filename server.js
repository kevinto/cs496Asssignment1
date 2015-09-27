// Let's require/import the http module
var http = require('http');
var dispatcher = require('httpdispatcher');

// Let's define a port we want to listen to
const PORT = 8080;

// We need a function which handles requests and send response
function handleRequest(request, response)
{
  try
  {
    // Log the request on console
    console.log(request.url);

    // Dispatch
    dispatcher.dispatch(request, response)
  }
  catch(err)
  {
    console.log(err);
  }
}

dispatcher.setStatic('resources');

// Get request
dispatcher.onGet("/page1", function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Page One');
});

// Post request
dispatcher.onPost("/post1", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Got Post Data');
})

// Create a server
var server = http.createServer(handleRequest);

// Let's start our server
server.listen(PORT, function()
{
  // Callback triggered when server is successfully listening.
  console.log("Server listening on: http://localhost:%s", PORT);
});
