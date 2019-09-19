const port = 8080;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.static(path.resolve('./public')))
app.set('view engine', 'pug');
app.set('views', 'view');


app.get('/', function (req, res) {
    res.render('index');
})


app.get('/province/:id', function (req, res) {
    var id = req.params.id;
    fs.readFile('./provinces/' + id + '.json', function (err, data) {
        if (err) {
            throw(err);
        } else {
            var myData = JSON.parse(data);
            // console.log(myData);
            res.render('index', myData);
        }
    })
})

// app.get('*', function (req, res) {
//     res.sendFile(404);
// })

app.listen(port, function () {
    console.log("Listening to " + port);
});