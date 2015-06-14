var fs = require('fs');

var path = process.argv[2].toString();

fs.readFile(path, 'utf8', finishedReading);

function finishedReading(error, fileContent) {
  if (error) return console.error(error);

  var newLines = fileContent.split('\n');
  console.log(newLines.length - 1);
}