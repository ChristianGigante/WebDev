module.exports = function (req, res, originalUrl) {
    const fs = require('fs');
    fs.appendFile('req.txt', originalUrl + '\n', function (err) {
        if (err) console.log(err);
        var num;
        fs.readFile('req.txt', function (err, data) {
            if (err) console.log(err);
            var array = data.toString().split("\n");
            num = array.length - 1;
            fs.writeFile('request.txt', num, function (err) {
                if (err) console.log(err);
                console.log("request Added!" + num)
            })
        })
    })
}

