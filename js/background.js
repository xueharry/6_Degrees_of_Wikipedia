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

function resetGame() {
	// Set badge text to empty string
    chrome.browserAction.setBadgeText({text:""});

    // Change popup to home.html
    chrome.browserAction.setPopup({popup:"home.html"});

    // Reset variables
    resetVars();

    // Reset extension
    chrome.runtime.reload();
}

// Listen for link clicked message
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.link != "") {
			sendResponse({received: "Link received: " + request.link});
			
			if (gameStarted) {
				// Check if goalTerm has been found
				if (request.link.toLowerCase().indexOf(goalTerm.toLowerCase()) >= 0){
					updateCounters();
					alert("You won!" + ' You found "' + goalTerm + '" in ' + clickCounter.toString() + " clicks.");
					resetGame();
				}
				else {
					updateCounters();
				}
			}
		}
});
