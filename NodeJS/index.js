var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8080;


http.createServer(function (req, res) {

  var q = url.parse(req.url, true);
  var filename = "." + q.pathname + "index.html";

 
    

  if(q.pathname == "/"){
    filename = "index.html";
  }else if(q.pathname.split("/").length > 0){
    var pathSegment = q.pathname.split("/");
    // console.log(pathSegment);
    var className = pathSegment[2];
    var fName = className + ".csv";
    filename = fName;
  }


    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);

      // console.log(data);
      return res.end();
    });
  


}).listen(port);