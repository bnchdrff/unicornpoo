/**
 * @file
 *
 * Header/footer related routes
 */

var fs = require('fs');
var ejs = require('ejs');
var content = require('../content');

exports.pooforsite = function(req, res) {
  // TODO: move out of request callbcak and reload files on change using node-supervisor or nodemon
  var files = {
    header: fs.readFileSync(__dirname + '/../lib/poo-header.ejs', 'ascii'),
    footer: fs.readFileSync(__dirname + '/../lib/poo-footer.ejs', 'ascii'),
    pooscript: fs.readFileSync(__dirname + '/../lib/poo-script.js', 'ascii'),
  };

  var header = ejs.render(files.header, { locals: content })
                  .replace(/'/g, '"').replace(/  */g, ' ').replace(/\n/g, ''); // stringify/minify
  var footer = ejs.render(files.footer, { locals: content })
                  .replace(/'/g, '"').replace(/  */g, ' ').replace(/\n/g, '');
  var templateoutput = "var header = '" + header + "';var footer = '" + footer + "';";

  var script = "(function(window) {" +
               "var document = window.document;" +
               templateoutput +
               files.pooscript +
               "})(window.helpMeIamFrameInFrame ? parent.window : window);";

  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Content-Length', script.length);
  res.end(script);
};


