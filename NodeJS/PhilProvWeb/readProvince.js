module.exports = function(req, res, id) {
    const fs = require('fs');
    fs.readFile('./provinces/' + id + '.json', function(err, data) {
        if (err) {
            console.log(err);
            // res.render('index', { body: 404 });
            //res.sendStatus(404).json({ error: "404" });
        } else {
            var myData = JSON.parse(data);
            // console.log(myData);
            res.render('index', myData);
        }
    })
}