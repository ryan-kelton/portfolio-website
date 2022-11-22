"use strict";

//window.onresize = function(){ location.reload(); }

// Variables
const mobileNav = document.getElementById("mobile-nav");
const hamburgerIcon = document.getElementById("hamburger-icon");
const exitIcon = document.getElementById("exit-icon");

// When hamburger menu is clicked turn on mobile navigation styles
function hamburger(){
    mobileNav.classList.add("mobile-nav-styles");
    mobileNav.classList.remove("hide");
    hamburgerIcon.classList.add("hide");
    exitIcon.classList.remove("hide");
}

// When the exit icon is clicked turn off mobile navigation styles
function exit(){
    mobileNav.classList.remove("mobile-nav-styles");
    mobileNav.classList.add("hide");
    exitIcon.classList.add("hide");
    hamburgerIcon.classList.remove("hide");
}

hamburgerIcon.addEventListener("click", hamburger);
exitIcon.addEventListener("click", exit);
mobileNav.addEventListener("click", exit);

