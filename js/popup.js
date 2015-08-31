function getGoalTerm(){
    // Cancel form submit
    event.preventDefault();

    // URL to generate random Wikipedia page
    var url = "https://en.wikipedia.org/wiki/Special:Random"

    // Get the goal term that the user has entered
    var goalTerm = document.getElementById('goalterm').value;
    console.log(goalTerm);

    // Redirect to random wikiipedia page
    // TODO: Ensure that the user stays only within Wikipedia?
    chrome.tabs.update(null, {url:url});

    // Set badge text to 0
    // TODO: Set tabId as well?
    chrome.browserAction.setBadgeText({text:"0"});
}

// When the popup has loaded
window.addEventListener('load', function(evt) {
    // Handle term form submit event
    document.getElementById('termform').addEventListener('submit', getGoalTerm);
})