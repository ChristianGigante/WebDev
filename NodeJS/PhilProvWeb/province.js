module.exports = function(req, res) {
    const fs = require('fs');
    var id = req.params.id;
    fs.readFile('./provinces/' + id + '.json', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var myData = JSON.parse(data);
            res.render('index', myData);
        }
    })
}