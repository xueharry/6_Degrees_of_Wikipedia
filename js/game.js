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

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-67282294-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript'; 
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(ga, s);
})();