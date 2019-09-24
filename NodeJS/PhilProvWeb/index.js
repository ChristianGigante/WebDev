const port = 3000;
const express = require('express');
const app = express();
const pageVisit = require('./log.js');
const provinceProvider = require('./province.js');
const path = require('path');
app.set('view engine', 'pug');
app.set('views', 'view');

//countPageVisit
app.use(function(req, res, next) {
    //console.log('Middleware Called', req.originalUrl)
    pageVisit(req, res);
    next();
})

//usePublicFolder
app.use(express.static(path.resolve('./public')))

//province
app.get('/province/:id', function (req, res) {
    provinceProvider(req,res);
})
//notFoundPage
app.get('*', function(req, res) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<img src='http://kalashreeheritage.com/wp-content/uploads/2018/08/maxresdefault.jpg' style='height:auto;width:100%'>");
})

app.listen(port, function () {
    console.log("Listening to " + port);
});