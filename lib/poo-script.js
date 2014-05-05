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

if (window.hasOwnProperty('jQuery')) {
  window.jQuery('body').prepend(header);
  window.jQuery('body').append(footer);
} else {
  var body = window.document.body;
  body.innerHTML = header + body.innerHTML + footer;
}
var style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet';
style.href = poobase + 'headerfooter.css';
document.getElementsByTagName("head")[0].appendChild(style);

var $sharedHeader = document.getElementById('shared-header');
var $searchForm = document.getElementById('shared-header-search-form');
var $searchQ = document.getElementById('shared-header-search-q');
var $searchGoogleQ = document.getElementById('shared-header-search-googleq');
var $searchToggleAll = document.getElementById('shared-header-search-toggle-all');
var $searchToggleThis = document.getElementById('shared-header-search-toggle-this');
var $searchChooser = document.getElementById('search-chooser');
var $links = $sharedHeader.getElementsByTagName('ul')[0];

var getOffsetLeft = function(obj) {
  var offsetLeft = 0;
  if (obj.offsetParent) {
    do {
      offsetLeft += obj.offsetLeft;
    } while (obj = obj.offsetParent);
  }
  return offsetLeft;
};

// site-specific
if (poosites.hasOwnProperty(poositename)) {
  // determine content area left/right margins
  var content_el = document.getElementById(poosites[poositename].content_id);
  var content_left = content_width = paddingRight = paddingLeft = 0;
  window.find(content_el); // needed in chrome-dev... TODO: report chrome bug?
  content_left = getOffsetLeft(content_el);
  content_width = content_el.offsetWidth;
  paddingRight = window.innerWidth - content_left - content_width + 'px';
  paddingLeft = content_left + 'px';
  $sharedHeader.style.paddingLeft = paddingLeft;
  $sharedHeader.style.paddingRight = paddingRight;
  $sharedHeader.style.backgroundPosition = paddingLeft + ' 5px';

  $sharedHeader.style.minWidth = content_width + 'px';

  // mobile-last design
  if (content_width < 940) {
    $sharedHeader.className = 'tablet';
    if (content_width < 692) {
      $sharedHeader.className = 'mobile';
    }
  } else {
    $sharedHeader.className = 'biggums';
  }

  // only do search chooser if poositename is in poosites and it has a search object
  if (poosites[poositename].hasOwnProperty('search')) {
    addEvent($searchQ, 'focus', function(ev) {
     $searchChooser.style.visibility = 'visible';
    });
    addEvent($searchToggleThis, 'click', function(ev) {
      ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
      $searchForm.action = poosites[poositename].search.action;
      $searchForm.method = poosites[poositename].search.method;
      $searchQ.name = poosites[poositename].search.name;
      $searchGoogleQ.disabled = 'disabled';
      $searchToggleAll.style.color = 'black';
      $searchToggleThis.style.color = '#90f';
      $searchChooser.style.backgroundPosition = '4em 0';
    });
    addEvent($searchToggleAll, 'click', function(ev) {
      ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
      $searchForm.action = '//google.com/search';
      $searchForm.method = 'get';
      $searchQ.name = 'q';
      $searchGoogleQ.disabled = false;
      $searchToggleAll.style.color = '#90f';
      $searchToggleThis.style.color = 'black';
      $searchChooser.style.backgroundPosition = '15.5em 0';
    });
  }
  else {
    addEvent($searchQ, 'focus', function(ev) {
      $searchChooser.style.visibility = 'visible';
    });
  }
}

// finally...
// special sparkles
if (window.hasOwnProperty('jQuery') && window.location.hash == '#extrasparkles') {
  window.jQuery('#shared-header').prepend('<div id="sparkles" />');
  window.jQuery('#sparkles').css({
    position: 'absolute',
    top: 0,
    display: 'none'
  });
  window.jQuery('#shared-header-donate').mouseover(function() {
    window.jQuery('#sparkles')
    .css({left: window.jQuery('#shared-header-donate').offset().left - 25 + 'px',})
    .fadeIn();
  window.jQuery('#shared-header-donate').mouseout(function() {
      window.jQuery('#sparkles').fadeOut();
  });
  });
}

// share buttons
if (window.hasOwnProperty('jQuery')) {
  /**
   * Pop-up share button helper.
   */
  function sharepop(url,title,w,h) {
    var l = (screen.width/2)-(w/2);
    var t = (screen.height/2)-(h/2);
    var targetWin = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+t+', left='+l);
  }

  /**
   * Loads share buttons where the wrapper exists.
   */
  function loadShareButtons() {
    // If the button wrapper exists.
    var $reply_wrap = window.jQuery('#reply-share');
    if ($reply_wrap.length !== 0) {
      // Add the Share button.
      $reply_wrap.append('<a id="sharebutt" href="#">Share this...</a><div id="button-wrap"></div>');
      // Default values from og meta.
      var shortlink = window.jQuery('link[rel=shorturl]').attr('href');
      var sharetitle = window.jQuery('meta[property="og:title"]').attr('content');
      var image = window.jQuery('meta[property="og:image"]').attr('content');
      var description = window.jQuery('meta[property="og:description"]').attr('content');
      var twitdesc = description;
      if (window.jQuery('#seshhash').length !== 0 && window.jQuery('#tweetable').length !== 0) {
        // Alternate Twitter description if fields available.
        twitdesc = escape(window.jQuery.trim(window.jQuery('#seshhash').html()))
                 + '%20'
                 + escape(window.jQuery.trim(window.jQuery('#tweetable').html()));
      }
      var shareablesloaded = false;
      window.jQuery('#reply-share').one('click', function(ev) {
        ev.preventDefault();
        var buttonwrap = window.jQuery(this).find('#button-wrap');
        if (!shareablesloaded) {
          //Create twitter button.
          var twitthis = '<div class="reply-helper"><div id="reply-twitter" style="display:none;"><a id="popatweet" href="http://twitter.com/share?url='
                       + shortlink
                       + '&text='
                       + twitdesc
                       + '" title="Share on Twitter">on Twitter</a></div></div>';
          // Create Facebook button.
          var facethis = '<div class="reply-helper"><div id="reply-facebook" style="display:none;"><a id="popaface" href="http://www.facebook.com/sharer.php?t='
                       + encodeURIComponent(sharetitle)
                       + '&u='
                       + encodeURIComponent(shortlink)
                       + '&i='
                       + encodeURIComponent(image)
                       + '" title="Share on Facebook">on Facebook</a></div></div>';
          // Create Tumblr button.
          var tumblr_button = '<div class="reply-helper"><div id="reply-tumblr" style="display:none;"><a id="popatumblr" href="http://www.tumblr.com/share/link?url='
                            + encodeURIComponent(shortlink)
                            + '&name='
                            + encodeURIComponent(sharetitle)
                            + '&description='
                            + encodeURIComponent(description)
                            + '" title="Share on Tumblr">on Tumblr</a></div></div>';
          // Add buttons to page.
          buttonwrap.append(twitthis);
          buttonwrap.append(facethis);
          buttonwrap.append(tumblr_button);
          window.jQuery('#sharebutt').on('click', function(ev) {
            ev.preventDefault();
          });
          window.jQuery('.reply-helper a').on('click', function(ev) {
            ev.preventDefault();
            sharepop(window.jQuery(this).attr('href'),window.jQuery(this).attr('title'),466,266);
          });
          shareablesloaded = true;
        }
        // Show in order.
        window.jQuery('#reply-twitter').clearQueue().show(0);
        window.jQuery('#reply-facebook').delay('250').show(0);
        window.jQuery('#reply-tumblr').delay('500').show(0);
      });
    }
  };

  loadShareButtons();
}
