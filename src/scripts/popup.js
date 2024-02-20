var buttonshow = document.getElementById("showban");
buttonshow.addEventListener(
    "click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
        });
      }, false);


var buttonhide = document.getElementById("hideban");
buttonshow.addEventListener(
    "click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
        });
      }, false);