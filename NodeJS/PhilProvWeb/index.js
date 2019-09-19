const port = 8080;
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.static(path.resolve('./public')))
app.set('view engine', 'pug');
app.set('views', 'view');


// app.get('/', function (req, res) {
//     res.render('index');
// })


app.get('/province/:id', function (req, res) {
    var id = req.params.id;
    fs.readFile('./provinces/' + id + '.json', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var myData = JSON.parse(data);
            // console.log(myData);
            res.render('index', myData);
        }
    })
})

app.get('/*/*/*/*/*', function (req, res) {
    fs.readFile('request.txt', function (err, data) {
        if (err) console.log(err);
        data = data * 1;
        data++;
        fs.writeFile('request.txt', data, function (err) {
            if (err) console.log(err);
            console.log("request Added!")
        })
        res.end();
    })
})

app.listen(port, function () {
    console.log("Listening to " + port);
});