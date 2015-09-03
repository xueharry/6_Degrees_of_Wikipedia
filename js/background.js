var gameStarted = false;
var goalTerm = "";
var clicks = 0;

// Resets all the background variables
function resetVars (){
	gameStarted = false;
	goalTerm = "";
	clicks = 0;
}

// Inject content script every time the browser URL is updated
chrome.tabs.onUpdated.addListener(function() {
    chrome.tabs.executeScript(null, { file: "js/contentscript.js" });
  });   
});

