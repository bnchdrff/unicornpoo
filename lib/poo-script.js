/**
 * This code is served within a FIF.
 */

// useful things for a framework-less world
// via http://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent
// and http://dustindiaz.com/rock-solid-addevent
function addEvent(obj, type, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(type, fn, false);
    EventCache.add(obj, type, fn);
  }
  else if (obj.attachEvent) {
    obj["e" + type + fn] = fn;
    obj[type + fn] = function () {
      obj["e" + type + fn](window.event);
    }
    obj.attachEvent("on" + type, obj[type + fn]);
    EventCache.add(obj, type, fn);
  }
  else {
    obj["on" + type] = obj["e" + type + fn];
  }
}
var EventCache = function () {
  var listEvents = [];
  return {
    listEvents: listEvents,
    add: function (node, sEventName, fHandler) {
      listEvents.push(arguments);
    },
    flush: function () {
      var i, item;
      for (i = listEvents.length - 1; i >= 0; i = i - 1) {
        item = listEvents[i];
        if (item[0].removeEventListener) {
          item[0].removeEventListener(item[1], item[2], item[3]);
        };
        if (item[1].substring(0, 2) != "on") {
          item[1] = "on" + item[1];
        };
        if (item[0].detachEvent) {
          item[0].detachEvent(item[1], item[2]);
        };
        item[0][item[1]] = null;
      };
    }
  };
}();
addEvent(window,'unload',EventCache.flush);

var body = window.document.body;
body.innerHTML = header + body.innerHTML + footer;
var style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet';
style.href = poobase + 'headerfooter.css';
document.getElementsByTagName("head")[0].appendChild(style);

var $searchForm = document.getElementById('shared-header-search-form');
var $searchQ = document.getElementById('shared-header-search-q');
var $searchGoogleQ = document.getElementById('shared-header-search-googleq');
var $searchToggleAll = document.getElementById('shared-header-search-toggle-all');
var $searchToggleThis = document.getElementById('shared-header-search-toggle-this');

// only do search chooser if poositename is in poosites and it has a search object
if (poosites.hasOwnProperty(poositename) && poosites[poositename].hasOwnProperty('search')) {
  addEvent(document.getElementById('shared-header-search-q'), 'focus', function(ev) {
    document.getElementById('search-chooser').style.display = 'inline';
  });
  addEvent($searchToggleThis, 'click', function(ev) {
    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
    $searchForm.action = poosites[poositename].search.action;
    $searchForm.method = poosites[poositename].search.method;
    $searchQ.name = poosites[poositename].search.name;
    $searchGoogleQ.disabled = 'disabled';
    $searchToggleAll.style.backgroundColor = 'transparent';
    $searchToggleThis.style.backgroundColor = '#fef100';
  });
  addEvent($searchToggleAll, 'click', function(ev) {
    ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
    $searchForm.action = 'http://google.com/search';
    $searchForm.method = 'post';
    $searchQ.name = 'q';
    $searchGoogleQ.disabled = false;
    $searchToggleAll.style.backgroundColor = '#fef100';
    $searchToggleThis.style.backgroundColor = 'transparent';
  });
}
else {
  addEvent(document.getElementById('shared-header-search-q'), 'focus', function(ev) {
    document.getElementById('search-chooser').innerHTML = '<span style="font-size:.8em;text-transform: uppercase;">Search all AMP sites with Google</a>';
    document.getElementById('search-chooser').style.display = 'inline';
  });
}

