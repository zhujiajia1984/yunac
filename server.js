var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

// Serve up folder 
var serve = serveStatic('./');

// Create server 
var server = http.createServer(function(req, res) {
	serve(req, res, finalhandler(req, res))
});

// Listen 
server.listen(18180);
console.log('http running on http://localhost:18180/html/index.html');