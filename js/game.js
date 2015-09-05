// Get background page
var background = chrome.extension.getBackgroundPage();

window.onload = function() {
    document.getElementById("current_clicks").innerHTML = background.clickCounter.toString();
	document.getElementById("current_term").innerHTML = "<b>" + background.goalTerm + "</b>";

	// Reset game if "Clear Game" clicked
	document.getElementById('clear_game').addEventListener('click', resetGame);
};

function resetGame() {
	// Set badge text to empty string
    chrome.browserAction.setBadgeText({text:""});

    // Change popup to home.html
    chrome.browserAction.setPopup({popup:"home.html"});

    // Reset variables
    background.resetVars();

    // Close popup since the template change is not reflected unless
    // the popup is closed and reopened again
    window.close();
}