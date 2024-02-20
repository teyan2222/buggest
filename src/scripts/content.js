
const header = document.getElementById("headerArea");
var headerHeigh = 0;

function ShowBaner(){
  banner1 = document.querySelector(".project-header");
  banner2 = document.querySelector(".work-item-form-main-header");
  banner3 = document.querySelector(".vss-PivotBar--bar-two-line");
  if (banner1) {
    banner1.style.removeProperty("display");
  }
  if (banner2) {
    banner2.style.removeProperty("display");
  }
  if (banner3) {
    banner3.style.removeProperty("display");
  }
}

function HideBanner(){
  banner1 = document.querySelector(".project-header");
  banner2 = document.querySelector(".work-item-form-main-header"); 
  banner3 = document.querySelector(".vss-PivotBar--bar-two-line");
  if (banner1) {
    banner1.style.display = "none";
  }
  if (banner2) {
    banner2.style.display = "none";
  }
  if (banner3) {
    banner3.style.display = "none";
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.action);
    if(request.action == "show_banner") {
        ShowBaner();
    }
    if(request.action == "hide_banner") {
        HideBanner();
    }
    sendResponse({farewell: "Roger"});
    }
);
