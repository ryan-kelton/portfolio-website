"use strict";

// Variables
let mobileNav = document.getElementById("mobile-nav");
let hamburgerIcon = document.getElementById("hamburger-icon");
let exitIcon = document.getElementById("exit-icon");

// When hamburger menu is clicked turn on mobile navigation styles
function hamburger(){
    mobileNav.classList.add("mobile-nav-styles");
    mobileNav.classList.remove("hide");
    hamburgerIcon.classList.add("hide");
    exitIcon.classList.remove("hide");
}
hamburgerIcon.addEventListener("click", hamburger);

// When the exit icon is clicked turn off mobile navigation styles
function exit(){
    mobileNav.classList.remove("mobile-nav-styles");
    mobileNav.classList.add("hide");
    exitIcon.classList.add("hide");
    hamburgerIcon.classList.remove("hide");
}
exitIcon.addEventListener("click", exit);
