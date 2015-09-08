// URL to generate random Wikipedia page
var url = "https://en.wikipedia.org/wiki/Special:Random";

// Get background page
var background = chrome.extension.getBackgroundPage();

function getGoalTerm(){
    // Cancel form submit
    event.preventDefault();

    // Get the goal term that the user has entered
    background.goalTerm = document.getElementById('goalterm').value;

    // Push goalTerm to Google Analytics
    _gaq.push(['_trackEvent', background.goalTerm, 'goalTerm submitted']);

    startGame();
}

function startGame(){
    // Redirect to random wikipedia page
    chrome.tabs.update(null, {url:url});

    // Set badge text to 0
    chrome.browserAction.setBadgeText({text:"0"});

    // Change popup to game.html
    chrome.browserAction.setPopup({popup:"game.html"});

    background.gameStarted = true;

    // Close popup since the template change is not reflected unless
    // the popup is closed and reopened again
    //window.close();
}

window.addEventListener('load', function() {
    if (!background.gameStarted){
        // Handle term form submit event
        document.getElementById('termform').addEventListener('submit', getGoalTerm);
        background.clickCounter = 0;
    }
});

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