/////////////////////////// TOPNAV MENU /////////////////////////// 

var topnavMenu = document.getElementById("topnav-menu");
var topnavOverlay = document.getElementById("topnav-overlay");

var isShowingTopnavMenu = false;

function toggleTopnavMenu() {
    isShowingTopnavMenu = !isShowingTopnavMenu;
    if (isShowingTopnavMenu) {
        topnavMenu.style.height = "560px";
        topnavMenu.style.padding = "30px 0";
        topnavOverlay.style.display = "block";
    }
    else {
        topnavMenu.style.height = "0";
        topnavMenu.style.padding = "0";
        topnavOverlay.style.display = "none";
    }
}

/////////////////////////// SIDENAV PROJECTS ///////////////////////////

var projectList = document.getElementById("project-list");

isShowingProjectList = false;

function toggleProjectList() {
    isShowingProjectList = !isShowingProjectList;
    if (isShowingProjectList) {
        projectList.style.height = "140px";
    }
    else {
        projectList.style.height = "0";
    }
}