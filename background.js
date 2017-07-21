chrome.browserAction.onClicked.addListener(tab => {
	var tablen = 0, winlen = 0;
	chrome.windows.getAll({}, windows => {
		winlen=windows.length;
		chrome.tabs.query({}, tabs => {
			tablen=tabs.length;
			chrome.tabs.create({
				url: 'https://twitter.com/intent/tweet?hashtags=howmanytabs&text=' +
				encodeURIComponent(chrome.i18n.getMessage("extTweetMsg").replace('winlen', winlen).replace('tablen', tablen))
			});
		});
	});
});
