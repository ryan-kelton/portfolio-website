"use strict";

window.onresize = function(){ location.reload(); }

// Variables
let mobileNav = document.getElementById("main-nav");
let hamburgerIcon = document.getElementById("hamburger-icon");
let exitIcon = document.getElementById("exit-icon");
let content = document.querySelector("main");

// When hamburger menu is clicked turn on mobile navigation styles
function hamburger(){
    mobileNav.classList.add("mobile-nav-styles");
    mobileNav.classList.remove("hide-nav");
    hamburgerIcon.classList.add("hide");
    exitIcon.classList.remove("hide");
    content.classList.add("dark-overlay");
}

// When the exit icon is clicked turn off mobile navigation styles
function exit(){
    mobileNav.classList.remove("mobile-nav-styles");
    mobileNav.classList.add("hide-nav");
    exitIcon.classList.add("hide");
    hamburgerIcon.classList.remove("hide");
    content.classList.remove("dark-overlay");
}

hamburgerIcon.addEventListener("click", hamburger);
exitIcon.addEventListener("click", exit);
mobileNav.addEventListener("click", exit);

