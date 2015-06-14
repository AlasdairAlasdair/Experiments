var fileThinger = require('./modular-module.js');

var dir = process.argv[2];
var ext = process.argv[3];

fileThinger(dir, ext, PrintAList);

function PrintAList(err, listToPrint) {
  if (err) return console.error(err);
  listToPrint.forEach(function (entry) {
    console.log(entry);
  })
}