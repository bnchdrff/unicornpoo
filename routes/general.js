/**
 * @file
 * General routes, like index
 */

var fs = require('fs');
var ejs = require('ejs');

exports.index = function(req, res) {
  fs.readFile(__dirname + '/../hornoftheunicorn.txt', function(err, data) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', data.length);
    res.end(data);
  });
};


