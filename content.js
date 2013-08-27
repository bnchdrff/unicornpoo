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
        'Copyright &copy; 2013 Allied Media Projects'
      ]
    },
    'amphome': {
      'search': {
        'action': 'https://www.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        'Copyright &copy; 2013 Allied Media Projects'
      ]
    },
    'amc': {
      'search': {
        'action': 'https://amc.alliedmedia.org/search/node',
        'method': 'post',
        'name': 'keys'
      },
      'footerboxes': [
        'Copyright &copy; 2013 Allied Media Projects'
      ]
    }
  },
};

module.exports = PooContent;
