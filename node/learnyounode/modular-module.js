var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {

  var desiredFiles = [];

  fs.readdir(dir, finishedReading);

  function finishedReading(error, files) {
    if (error) return callback(error);

    files.forEach(function (entry) {
      if (path.extname(entry) === '.' + ext)
        desiredFiles.push(entry);
    });

    callback(null, desiredFiles);
  }
}