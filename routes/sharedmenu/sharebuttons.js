
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
  var $reply_wrap = jQuery('#reply-share');
  if ($reply_wrap.length !== 0) {
    // Add the Share button.
    $reply_wrap.append('<a id="sharebutt" href="#">Share this...</a><div id="button-wrap"></div>');
    // Default values from og meta.
    var shortlink = jQuery('link[rel=shorturl]').attr('href');
    var sharetitle = jQuery('meta[property="og:title"]').attr('content');
    var image = jQuery('meta[property="og:image"]').attr('content');
    var description = jQuery('meta[property="og:description"]').attr('content');
    var twitdesc = description;
    if (jQuery('#seshhash').length !== 0 && jQuery('#tweetable').length !== 0) {
      // Alternate Twitter description if fields available.
      twitdesc = escape(jQuery.trim(jQuery('#seshhash').html()))
               + '%20'
               + escape(jQuery.trim(jQuery('#tweetable').html()));
    }
    var shareablesloaded = false;
    jQuery('#reply-share').one('click', function(ev) {
      ev.preventDefault();
      var buttonwrap = jQuery(this).find('#button-wrap');
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
        jQuery('#sharebutt').on('click', function(ev) {
          ev.preventDefault();
        });
        jQuery('.reply-helper a').on('click', function(ev) {
          ev.preventDefault();
          sharepop(jQuery(this).attr('href'),jQuery(this).attr('title'),466,266);
        });
        shareablesloaded = true;
      }
      // Show in order.
      jQuery('#reply-twitter').clearQueue().show(0);
      jQuery('#reply-facebook').delay('250').show(0);
      jQuery('#reply-tumblr').delay('500').show(0);
    });
  }
};

jQuery(window).load(function() {
  loadShareButtons();
});
