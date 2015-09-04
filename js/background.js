// TODO: Find better way to structure this
var gameStarted = false;
var goalTerm = "";
var clickCounter = 0;

// Resets all the background variables
function resetVars (){
	gameStarted = false;
	goalTerm = "";
	clickCounter = 0;
}

// Listen for link clicked message
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.link != "") {
			console.log(request.link);
			sendResponse({received: "Link received" + request.link});
			clickCounter++;
			// Update badge text
			chrome.browserAction.setBadgeText({text:clickCounter.toString()});
		}
});
