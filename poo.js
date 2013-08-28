/**
 * @file
 *
 * Unicornpoo server.
 */

var express = require('express');
var fs = require('fs');

var poo = express();

poo.use(express.static(__dirname + '/public'));

var conf = {
  port: process.env.PORT || 3000,
};

var routes = {
  general: require('./routes/general'),
  sharedmenu: require('./routes/sharedmenu'),
  headerfooter: require('./routes/headerfooter')
};

poo.get('/', routes.general.index);
poo.get('/sharedmenu', routes.sharedmenu.oldpoo);
poo.get('/headerfooter/:sitename', routes.headerfooter.pooforsite);

poo.listen(conf.port);

