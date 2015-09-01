// URL to generate random Wikipedia page
var url = "https://en.wikipedia.org/wiki/Special:Random";

// Get background page
var background = chrome.extension.getBackgroundPage();

function getGoalTerm(){
    // Cancel form submit
    event.preventDefault();

    // Get the goal term that the user has entered
    background.goalTerm = document.getElementById('goalterm').value;

    // TODO: Modularize this more cleanly
    startGame();
}

function startGame(){
    // Redirect to random wikipedia page
    // TODO: Ensure that the user stays only within Wikipedia?
    chrome.tabs.update(null, {url:url});

    // Set badge text to 0
    chrome.browserAction.setBadgeText({text:"0"});

    // Change popup to game.html
    chrome.browserAction.setPopup({popup:"game.html"});

    // Close popup since the template change is not reflected unless
    // the popup is closed and reopened again
    // TODO: Figure out if there is an alternative to this
    window.close();
}

window.addEventListener('load', function() {
    if (!background.gameStarted){
        // Handle term form submit event
        document.getElementById('termform').addEventListener('submit', getGoalTerm);
        background.gameStarted = true;
    }
})