module.exports = function (req, res) {
  const fs = require("fs");
  var rate = req.query.rate;
  var city = req.query.city + ".json";
  var myData = fs.readFileSync("./provinces/" + city);
  var newData = JSON.parse(myData);
  if(newData.rate==0){
    var rating = (Number(newData.rate) + Number(rate))
    newData.rate = rating
    fs.writeFile("./provinces/" + city, JSON.stringify(newData), function (err) {
      if (err) throw err;
      console.log('Rated Successfully!');
    });
    res.end("" + newData.rate)
  }
  else{
    var rating = (Number(newData.rate) + Number(rate))
    newData.rate = rating
    newData.rate = Number(Number(newData.rate / 2).toFixed(2))
    fs.writeFile("./provinces/" + city, JSON.stringify(newData), function (err) {
      if (err) throw err;
      console.log('Rated Successfully!');
    });
    res.end("" + newData.rate)
  }
}