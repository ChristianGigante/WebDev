var http = require('http');
var dt = require('./myFirstModule');
var port = 8080;
console.log('port',port);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(port);