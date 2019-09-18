var express = require('express')
var app = express()
app.set('view engine', 'pug');
app.set('views','view');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
res.render('province');
})
app.listen(8085);