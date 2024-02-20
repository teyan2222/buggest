
const header = document.getElementById("headerArea");
var headerHeigh = 0;
// `document.querySelector` may return null if the selector doesn't match anything.
if (header) {
  headerHeigh = header.style.height;
}

function becomeBig(){
  if (header) {
    header.style.height = headerHeigh * 2;
  }
}

function becomeSmall(){
  if (header) {
    header.style.height = headerHeigh;
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    sendResponse({farewell: "Roger"});
    }
);
