var map = require('through2-map');
var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
       return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(port);