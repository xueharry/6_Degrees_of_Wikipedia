// URL to generate random Wikipedia page
var url = "https://en.wikipedia.org/wiki/Special:Random";
var gameStarted = false;

function getGoalTerm(){
    // Cancel form submit
    event.preventDefault();

    // Get the goal term that the user has entered
    goalTerm = document.getElementById('goalterm').value;

    // TODO: Modularize this more cleanly
    startGame();
}

function startGame(){
    // Redirect to random wikiipedia page
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


window.addEventListener('load', function(evt) {
    if (!gameStarted){
        // Handle term form submit event
        document.getElementById('termform').addEventListener('submit', getGoalTerm);
        gameStarted = true;
    }
})