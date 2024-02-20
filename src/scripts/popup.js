var buttonshow = document.getElementById("showban");
buttonshow.addEventListener(
    "click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "show_banner"}, function(response) {});  
        });
      }, false);


var buttonhide = document.getElementById("hideban");
buttonhide.addEventListener(
    "click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "hide_banner"}, function(response) {});  
        });
      }, false);