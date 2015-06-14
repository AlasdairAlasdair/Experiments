var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  socket.end(GetMeTheDateString());
});

server.listen(port);

function GetMeTheDateString() {

  var date = new Date();
  var year = date.getFullYear();
  var month = zeroFill(date.getMonth() + 1);
  var day = zeroFill(date.getDate());
  var hours = zeroFill(date.getHours());
  var mins = zeroFill(date.getMinutes());

  return year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n";
}

function zeroFill(datePart) {
  var datePartString = datePart.toString();

  if (datePartString.length == 1) {
    datePartString = "0" + datePartString;
  }

  return datePartString;
}