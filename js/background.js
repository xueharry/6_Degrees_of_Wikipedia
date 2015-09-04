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

function updateCounters (){	
	clickCounter++;
	// Update badge text
	chrome.browserAction.setBadgeText({text:clickCounter.toString()});
}

// Listen for link clicked message
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.link != "") {
			sendResponse({received: "Link received: " + request.link});
			
			if (gameStarted) {
				// Check if goalTerm has been found
				if (request.link.toLowerCase() == goalTerm.toLowerCase()){
					updateCounters();
					alert("You won!");
				}
				updateCounters();
			}
		}
});
