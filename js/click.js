window.onload = function() {
	console.log("loaded");

	//Listen for click events
	document.body.addEventListener('click', function() {
		// Send a message to background.js
		chrome.runtime.sendMessage({linkClicked:"test"});
		console.log('clicked?');
	});
};