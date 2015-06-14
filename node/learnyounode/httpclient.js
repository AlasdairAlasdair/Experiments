var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, callback);

function callback(response) {

  response.pipe(bl(
    function (err, data) {
      if (err) return console.error(err);;
      console.log(data.toString().length);
      console.log(data.toString());
    }));

  response.on("end", console.log);
  response.on("error", console.log);
};