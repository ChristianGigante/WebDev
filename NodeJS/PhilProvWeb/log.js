module.exports = function(req, res) {
    const fs = require('fs');
    fs.readFile('request.txt', function(err, data) {
        if (err) console.log(err);
        data = data * 1;
        data++;
        fs.writeFile('request.txt', data, function(err) {
            if (err) console.log(err);
            console.log("request Added!")
        })
    })
}

