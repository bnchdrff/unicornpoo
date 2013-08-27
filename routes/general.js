/**
 * @file
 * General routes, like index
 */

var fs = require('fs');
var ejs = require('ejs');

exports.index = function(req, res) {
  fs.readFile(__dirname + '/../hornoftheunicorn.html', function(err, data) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', data.length);
    res.end(data);
  });
};


