// Inject script into page
var s = document.createElement('script');

s.src = chrome.extension.getURL('js/click.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

console.log("Content Script injected");