document.body.addEventListener('click', function(e) {
	console.log('Click');
	
	// Get title of clicked link
	var linkTitle = e.target.title;

	// Send message to background.js
	chrome.runtime.sendMessage({link: linkTitle}, function(response){
		console.log(response.received);
	});
	}, false);			

console.log("Content Script injected");