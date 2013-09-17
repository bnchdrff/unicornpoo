/* Unicornpoo content */

var defaultfooterbox = '<ul><li>AMPSTORE PRODUCTS</li><li><a href="https://store.alliedmedia.org/transformative-arts-practice-space-prints-moon-in-femme"><img height=50 width=50 src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/m/o/moon_in_femme2.jpg"></a><a href="https://store.alliedmedia.org/fierce-fashion-future-totes"><img height=50 width=50 src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/f/f/fff_tote_bag_pic.jpg"></a><a href="https://store.alliedmedia.org/amc2012kitofpartst"><img height=50 width=50 src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/m/amctshirt-07.jpg"></a></li><li>Subscribe to our newsletter:<br><form method="post" action="http://oi.vresp.com?fid=02945ca4d1"><input type="text" name="email_address"><input type="submit" style="form-submit" value="SUBSCRIBE"></form></li><li><a href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US"><img src="http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" alt="title="This site carries a Creative Commons license, which permits noncommercial re-use of Allied Media Projects content when proper attribution is provided. Please click for more details."></a></li></ul>';

var PooContent = {
  impressum: {
    name: 'Allied Media Projects',
    slogan: 'Media strategies for a more just, creative, and collaborative world.',
    contact_link_text: 'Contact Us',
    contact_link_url: 'http://alliedmedia.org/contact?cat=0'
  },
  links: [
    {
      url: "http://alliedmedia.org",
      title: "Allied Media Projects",
      text: "AMP"
    },
    {
      url: "http://amc.alliedmedia.org",
      title: "Allied Media Conference",
      text: "AMC"
    },
    {
      url: "http://detroitfuture.org",
      title: "Detroit Future",
      text: "DF"
    },
               {
      url: "http://detroitdjc.org",
      title: "Detroit Digital Justice Coalition",
      text: "DDJC"
    },
    {
      url: "http://talk.alliedmedia.org",
      title: "AMPTalk",
      text: "AMPTalk"
    },
    {
      url: "https://store.alliedmedia.org",
      title: "AMPStore",
      text: "AMPStore"
    }
  ],
  sites: {
    'amptalk': {
      'content_id': 'container',
      'search': {
        'action': 'https://talk.alliedmedia.org/search/site',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        defaultfooterbox
      ]
    },
    'amphome': {
      'content_id': 'block-system-main-menu',
      'search': {
        'action': 'https://www.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        defaultfooterbox
      ]
    },
    'amc': {
      'content_id': 'container',
      'search': {
        'action': 'https://amc.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        defaultfooterbox
      ]
    }
  },
};

module.exports = PooContent;
