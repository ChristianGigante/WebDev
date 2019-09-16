

const express = require('express');
const express = require('express');
const app = express();
var http = require('http').Server(app);
var url = require('url');
var add = require('./src/enroll');
var mkTbl = require('./src/mkTbl');
var fs = require('fs');
var port = 8080;
console.log("Running..," + port);

app.all('/enroll', function (req, res) {
  res.sendFile(path.join(__dirname, 'view/index.html'));
  add(req)
});

app.all('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.all('/class/:id', function (req, res) {
  var list = [];
  var data = req.params.id;
  mkTbl(res, list, data);
});

http.listen(port, () => {
  console.log('listening on port ' + port);

});


// http.createServer(function (req, res) {


//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;

//   if (q.pathname.includes('/enroll')) {
//     add.addFile(req, res);
//     res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
//     res.end("ok");
//   }else if (q.pathname == "/") {
//     filename = "index.html";
//     res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
//     fs.readFile(filename, 'utf8', function (err, data) {
//       res.write(data);
//       return res.end();
//     })
//   } else if (q.pathname.includes("/class")) {
//     var pathSegment = q.pathname.split("/");
//     var className = pathSegment[2];
//     // console.log(className);
//     var fName = className + ".csv";
//     filename = fName;
//     fs.readFile(filename, 'utf8', function (err, myData) {
//       if(err){
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         return res.end("404 Not Found");
//       }else{
//         mkTbl.readFiles(myData,res);
//       }
//     })
//   }else{
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     return res.end("404 Not Found");
//   }


// }).listen(port);