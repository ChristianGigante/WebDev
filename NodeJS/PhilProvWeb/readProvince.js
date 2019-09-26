module.exports = function(req, res, id) {
    const fs = require('fs');
    fs.readFile('./provinces/' + id + '.json', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var myData = JSON.parse(data);
            res.render('index', myData);
        }
    })
}