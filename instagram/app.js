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

/////////////////////////// CAROUSEL ///////////////////////////

var slideIndex = 0;
var slides = document.getElementsByClassName("carousel-slide");
var dots = document.getElementsByClassName("dot");

function advanceSlide(n) {
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex);
}

function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }
    slides[n].classList.add("active-slide");

    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }
    dots[n].classList.add("active-dot");

    slideIndex = n;
}