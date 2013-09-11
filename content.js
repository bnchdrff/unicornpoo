/* Unicornpoo content */
var PooContent = {
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
      'search': {
        'action': 'https://talk.alliedmedia.org/search/site',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        '<ul><li>Buy things at the AMP Store:</li><li><a href="https://store.alliedmedia.org/transformative-arts-practice-space-prints-moon-in-femme"><img src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/m/o/moon_in_femme2.jpg"></a><a href="https://store.alliedmedia.org/fierce-fashion-future-totes"><img src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/f/f/fff_tote_bag_pic.jpg"></a></li><li><a href="https://store.alliedmedia.org/amc2012kitofpartst"><img src="https://store.alliedmedia.org/media/catalog/product/cache/1/thumbnail/60x60/9df78eab33525d08d6e5fb8d27136e95/a/m/amctshirt-07.jpg"></a></li><li>This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a></li></ul>'
      ]
    },
    'amphome': {
      'search': {
        'action': 'https://www.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        'This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a>'
      ]
    },
    'amc': {
      'search': {
        'action': 'https://amc.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        'This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a>'
      ]
    }
  },
};

module.exports = PooContent;
