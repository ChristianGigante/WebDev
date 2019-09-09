var http = require('http');
var url = require('url');
var add = require('./enroll.js');
var fs = require('fs');
var port = 8000;
console.log("Running..," + port);

http.createServer(function (req, res) {

  add.addFile(req, res);

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  if (q.pathname == "/") {
    filename += "index.html";
  } else if (q.pathname.split("/").length > 0) {
    var pathSegment = q.pathname.split("/");
    // console.log(pathSegment);
    var className = pathSegment[2];
    var fName = className + ".csv";
    filename = fName;
  }


  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
    res.write(data);
    return res.end();
  });



}).listen(port);