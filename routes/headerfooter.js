/**
 * @file
 *
 * Header/footer related routes
 */

var fs = require('fs');
var ejs = require('ejs');
var content = require('../content');
var pantry = require('pantry');
var async = require('async');

pantry.configure({
  shelfLife: 5
});

/**
 * @param :sitename
 *   key for data in content.js sites object
 */
exports.pooforsite = function(req, res) {
  // TODO: move out of request callbcak and reload files on change using node-supervisor or nodemon
  var files = {
    header: fs.readFileSync(__dirname + '/../lib/poo-header.ejs', 'ascii'),
    footer: fs.readFileSync(__dirname + '/../lib/poo-footer.ejs', 'ascii'),
    pooscript: fs.readFileSync(__dirname + '/../lib/poo-script.js', 'ascii'),
  };

  content.sitename = req.params.sitename.replace(/\W/g, '');
  content.sitename = (content.sites.hasOwnProperty(content.sitename)) ? (content.sitename) : false;

  // Build content.poofeeds manually
  // TODO someday: make feed specs a conf object and dynamically build funs array
  content.poofeeds = {};
  var funs = [
    function(cb) {
      pantry.fetch('https://www.alliedmedia.org/news/json/2?poops', function(err, item) {
        content.poofeeds.amphome = item.stories.slice(0, 3);
        cb();
      });
    },
    function(cb) {
      pantry.fetch('http://beta.allied365.org/activity-json', function(err, item) {
        content.poofeeds.a365 = item.activities.slice(0, 3);
        cb();
      });
    },
    function(cb) {
      pantry.fetch('https://talk.alliedmedia.org/sites/talk.alliedmedia.org/files/js/feed-talks.js', function(err, item) {
        content.poofeeds.amptalk = item.response.docs.slice(0, 3);
        cb();
      });
    }
  ];

  // Serve request after pantry is full
  async.parallel(funs, function() {
    var header = ejs.render(files.header, { locals: content })
                    .replace(/'/g, '"').replace(/  */g, ' ').replace(/\n/g, ''); // stringify/minify
    var footer = ejs.render(files.footer, { locals: content })
                    .replace(/'/g, '"').replace(/  */g, ' ').replace(/\n/g, '');
    var templateoutput = "var header = '" + header +  "';\nvar footer = '" + footer + "';\n";

    var poobase = (process.env.NODE_ENV == 'development') ? '//localhost:3000/' : '//unicornpoo.alliedmedia.org/';

    var script = "(function(window) {" + "\n" +
                 'var poobase = "' + poobase + '";' +"\n" +
                 'var poosites = ' + JSON.stringify(content.sites) + ';' +"\n" +
                 'var poositename = ' + "'" + content.sitename + "'" + ';' +"\n" +
                 "var document = window.document;" +"\n" +
                 templateoutput +"\n" +
                 files.pooscript +"\n" +
                 "})(window.helpMeIamFrameInFrame ? parent.window : window);";

    res.setHeader('Content-Type', 'application/javascript');
    res.end(script);
  });
};


