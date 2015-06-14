var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, finishedReading);

function finishedReading(error, files) {
  if (error) return console.error(error);

  files.forEach(function (entry) {
    if (path.extname(entry) === ext)
      console.log(entry);
  });
}