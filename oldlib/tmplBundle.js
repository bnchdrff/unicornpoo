templates: {
	headerTmpl:
		"<ul id='shared-header'>" +
		"<% _.each(links, function(link) { %>" +
		"<li><a href='<%= link.url %>' title='<%= link.title %>'><%= link.text %></a></li>" +
		"<% }); %>" +
		"<li>" +
			"<form action='http://google.com/search' method='get' accept-charset='UTF-8'>" +
				"<input type='text' name='q' value='' size='17' maxlength='255'>" +
				"<input type='submit' name='op' value='Search'>" +
				"<input type='hidden' name='q' value='site:alliedmedia.org' />" +
			"</form>" +
			"<span id='search-chooser'>" +
				"<a id='search-all' href='#' style='font-size:.8em;text-transform: uppercase;outline:0;background:#fef100'>All AMP sites</a>" +
				"<span style='font-size:.8em;text-transform:uppercase;'> or </span>" +
				"<a id='search-this' href='#' style='font-size:.8em;text-transform:uppercase;outline:0'>This site</a>" +
			"</span>" +
		"</li>" +
		"</ul>" +
		"<script type='text/javascript'>\n" +
		"jQuery('#shared-header input[type=text]').focus(function() {" +
		"  jQuery('#search-chooser').fadeIn();" +
		"});" +
		"<% if(typeof localsearch === 'object') { %>" +
		"  jQuery('#search-this').click(function(ev) {" +
		"    ev.preventDefault();" +
		"    jQuery('#shared-header form').attr('action','<%= localsearch.action %>');" +
		"    jQuery('#shared-header input[type=hidden]').remove();" +
		"    jQuery('#shared-header input[type=text]').attr('name','<%= localsearch.queryname %>');" +
		"    jQuery('#search-all').css('background','none');" +
		"    jQuery(this).css('background','#fef100');" +
		"  });" +
		"  jQuery('#search-all').click(function(ev) {" +
		"    ev.preventDefault();" +
		"    jQuery('#shared-header form').attr('action','http://google.com/search');" +
		"    jQuery('#shared-header input[type=text]').attr('name','q');" +
		"    jQuery('#shared-header form').append('<input type=\\\'hidden\\\' name=\\\'q\\\' value=\\\'site:alliedmedia.org\\\' />');" +
		"    jQuery('#search-this').css('background','none');" +
		"    jQuery(this).css('background','#fef100');" +
		"  });" +
		"<% } %>" +
		"\n</script>",
	articlesTmpl:
		"<div id='syndicated-news'>" +
			"<% for( var i=0; i < 5; i++) { %> <%= this.articleTmplCmpl({article:articles[i].story}) %> <% }; %>" +
			"<a id='more-syndicated' href='http://alliedmedia.org/news/allied-media-conference'>More news...</a>" +
		"</div>",
	articleTmpl:
		"<article>" +
		"<a href='<%= article.url %>' class='lead-image'><img typeof='foaf:Image' src='<%= article.leadimage_small_sq %>' alt='<%= article.leadimagecaption %>' /></a>" +
		"<div class='deets'>" +
			"<div class='news-title'>" +
				"<a title='<%= article.body %>' href='<%= article.url %>'><%= article.title %></a>" +
			"</div>" +
			"<time class='date'>" +
				"<%= article.date %>" +
			"</time>" +
		"</div>" +
		//"<span class='category'>" +
		//	"<a href='<%= article.categoryurl %>' typeof='skos:Concept' property='rdfs:label skos:prefLabel'><%= article.category %></a>" +
		//"</span>" +
		//"<div class='body'>" +
		//	"<p><%= article.body %></p>" +
		//"</div>" +
		"</article>",
	footerTmpl:
		"<div id='shared-footer'>" +
		"<ul id='impressum'>" +
			"<li id='footer-box-amp'>" +
				"<h3>Allied Media Projects</h3>" +
				"<ul>" +
					"<li><strong>Media strategies for a more just and creative world.</strong></li>" +
					"<li><a href='http://alliedmedia.org/contact?cat=0'>Contact Us</a>.</li>" +
				"</ul>" +
			"</li>" +
/*			"<li id='footer-box-amptalk'>" +
				"<h4>AMPTalk</h4>" +
				"<ul id='amptalk-recent'>" +
				"<% var talks_count = ( talks.length > 3 ) ? 3 : talks.length; for( var i=0; i < talks_count; i++ ) { %> <%= this.talksTmplCmpl({talk:talks[i]}) %> <% }; %>" +
				"</ul>" +
        "<a href='http://talk.alliedmedia.org/newswire/rss-top.xml' class='feed-icon'>RSS</a>" +
			"</li>" +*/
			"<li id='footer-box-news'>" +
				"<h4>AMP Blog</h4>" +
				"<ul id='ampnews-recent'>" +
				"<% var newses_count = ( newses.length > 3 ) ? 3 : newses.length; for( var i=0; i < newses_count; i++ ) { %> <%= this.newsesTmplCmpl({news:newses[i]}) %> <% }; %>" +
				"</ul>" +
        "<a href='http://alliedmedia.org/news/rss.xml' class='feed-icon' title='Subscribe to AMP Blog'>RSS</a>" +
			"</li>" +
			"<li id='footer-box-a365'>" +
				"<h4>Allied365</h4>" +
				"<ul id='a365-recent'>" +
				"<% var a365s_count = ( a365s.length > 3 ) ? 3 : a365s.length; for( var i=0; i < a365s_count; i++ ) { %> <%= this.a365sTmplCmpl({a365:a365s[i]}) %> <% }; %>" +
				"</ul>" +
			"</li>" +
		"</ul>" +
		"<br style='clear:both' />" +
		"<ul id='footer-networklinks'>" +
			"<li>OUR NETWORK:</li>" +
		"<% _.each(links, function(link) { %>" +
			"<li><a href='<%= link.url %>' title='<%= link.title %>'><%= link.text %></a></li>" +
		"<% }); %>" +
		"</ul>" +
		"<br style='clear:both' />" +
		"</div>"+
		"<script type='text/javascript'>\n" +
    "jQuery('a[href^=\"http://alliedmedia.org/contact\"]').each( function() {" +
    "  var link = jQuery(this);" +
    "  var href = link.attr('href');" +
    "  link.attr('href', href + '&url=' + window.location.href).addClass('feedback-link');" +
    "});" +
		"\n</script>\n",
	/*talksTmpl:
		"<li>" +
			"<a title='<%= talk.text %>' href='<%= talk.entities.urls[0].expanded_url %>'>" +
			"<%= talk.text %></a> <small>upvoted on <%= talk.created_at %></small>" +
		"</li>",*/
	newsesTmpl:
		"<li>" +
			"<a title='<%= news.story.title %>' href='http://alliedmedia.org<%= news.story.path %>'>" +
			"<%= news.story.title %></a> <small>posted <%= news.story.date %></small>" +
		"</li>",
	a365sTmpl:
		"<li>" +
			"<a title='<%= a365.activity.org %> updated <%= a365.activity.title %>' href='http://allied365.org<%= a365.activity.path %>'>" +
			"<%= a365.activity.org %> updated <%= a365.activity.title %></a> <small>posted <%= a365.activity.date %></small>" +
		"</li>"
}
