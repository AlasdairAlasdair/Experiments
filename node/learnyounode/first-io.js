var fs = require('fs');

var path = process.argv[2].toString();
var content = fs.readFileSync(path);

var newLines = content.toString().split('\n');

console.log(newLines.length - 1);