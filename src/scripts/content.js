
bugState = document.getElementById("witc_3_txt");

function ShowBaner(){
    element = document.querySelector(".project-header");
    if(element) element.style.removeProperty("display");
    element = document.querySelector(".work-item-form-main-header");
    if(element) element.style.removeProperty("display");
    element = document.querySelector(".vss-PivotBar--bar-two-line");
    if(element) element.style.removeProperty("display");
    element = document.querySelector(".work-item-responsive-header-left");
    if(element) element.style.removeProperty("display");

    brief = document.getElementById("buggest_brief");
    if(brief) brief.parentNode.removeChild(brief);

}

function HideBanner(){
    element = document.querySelector(".project-header");
    if(element) element.style.display = "none";
    element = document.querySelector(".work-item-form-main-header");
    if(element) element.style.display = "none";
    element = document.querySelector(".vss-PivotBar--bar-two-line");
    if(element) element.style.display = "none";
    element = document.querySelector(".work-item-responsive-header-left");
    if(element) element.style.display = "none";
    
    bugState = document.getElementById("witc_3_txt");
    bugTitle = document.getElementById("witc_1_txt");
    infotext = document.getElementsByClassName("info-text-wrapper")[0];

    bugbrief = document.createElement("div");
    bugbrief.id = "buggest_brief";
    bugbrief.innerHTML = bugTitle.value + "Statue: " + bugState.value;
    infotext?.appendChild(bugbrief);
    
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
