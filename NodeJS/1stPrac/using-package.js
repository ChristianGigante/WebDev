
var uc = require('upper-case');

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("<center><h1>Hello World!</h1></center>"));
  res.end();
}).listen(8080);