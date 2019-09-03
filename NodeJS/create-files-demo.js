var fs = require('fs');

fs.appendFile('mynewfile0.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});