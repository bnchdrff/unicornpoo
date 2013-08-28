/**
 * @file
 *
 * Old sharedmenu.
 */

var fs = require('fs');
var pantry = require('pantry');

var newsPantry = {
  uri: 'http://alliedmedia.org/news/json/2?poops'
}

/*
var talkPantry = {
  uri: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=amp_talk&include_entities=true&count=3'
}
*/

var a365Pantry = {
  uri: 'http://beta.allied365.org/activity-json'
}

var sharedmenus = templates = buttons = {};

var talks = newses = a365s = '';

pantry.configure({
  parser: 'string',
  shelfLife: 5
});

exports.oldpoo = function(req, res) {
  // assign callback if it's there
  var cb = ( req.query.callback && !req.query.callback.match(/\W/) ) ? req.query.callback : 'callback';

  // load shared menus
  fs.readFile(__dirname + '/lib/sharedmenus.js', function(err, data) {
    sharedmenus = data;
  });

  // load templates
  fs.readFile(__dirname + '/lib/tmplBundle.js', function(err, data) {
    templates = data;
  });

  // load templates
  fs.readFile(__dirname + '/lib/sharebuttons.js', function(err, data) {
    buttons = data;
  });

  /*
  pantry.fetch( talkPantry, function(error, item) {
    item.forEach(function(node) {
      // Clean up date string a bit...
      var s = JSON.stringify(node.created_at);
      var d = new Date(s);
      d = d.toDateString().substring(4).replace(/(\d)\s/, "$1, ");
      node.created_at = d;
      // Remove the link in the text
      var text = node.text;
      text = text.replace(/ (http).*$/, '');
      node.text = text;
    });
    talks = JSON.stringify(item);
  });
  */
  pantry.fetch( newsPantry, function(error, item) { newses = JSON.stringify(item); } );
  pantry.fetch( a365Pantry, function(error, item) { a365s = JSON.stringify(item); } );

  res.contentType('.js');
  res.send(
    cb
    + "(\n"
    + "miracleOfUnicorns = {\n"
    + templates
    + ",\n"
    + sharedmenus
    + ",\nnewses: \n" + newses + "\n"
    //+ ",\ntalks: \n{nodes:" + talks + "}\n"
    + ",\na365s: \n" + a365s + "\n"
    + "}\n"
    + ');'
    + buttons
  );
};


