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
        'This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US">Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.</a>'
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
