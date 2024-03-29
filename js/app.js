// Variables declarations
const hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");
let currentYear = document.getElementById("footer-year");


// Script to toggle Navbar Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


/* LIGHT & DARK MODE SCRIPT */
// Getting all the variables to be toggled 
const checkbox = document.getElementById("checkbox");
const bannerBg = document.querySelector(".banner-section");
const bannerText = document.querySelector(".banner-text");
const bannerh3 = document.getElementById("banner-h3");
const bannerP = document.getElementById("banner-p");
const aboutSection = document.querySelector(".about-container");
const aboutText = document.querySelectorAll(".about-p");
const skillsBg = document.querySelector(".skills-container");
const skillP = document.querySelectorAll(".skills-p");
const contactBg = document.querySelector(".contact-container");
const label = document.querySelectorAll("label");
const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const footer = document.querySelector("footer");
const footerText = document.querySelectorAll(".footer-text");
const logo = document.getElementById("logo");
const header = document.querySelector("header");
const bar = document.querySelectorAll(".bar");
const navLink = document.querySelectorAll(".nav-link");
const github = document.getElementById("github");
checkbox.addEventListener("change",() =>{

    // change theme of the website
    document.body.classList.toggle("light");
    bannerBg.classList.toggle("light");
    bannerText.classList.toggle("light");
    bannerh3.classList.toggle("light");
    bannerP.classList.toggle("light");
    aboutSection.classList.toggle("light");
    aboutText.forEach(i => i.classList.toggle("light"));
    skillsBg.classList.toggle("light");
    skillP.forEach(i => i.classList.toggle("light"));
    contactBg.classList.toggle("light");
    label.forEach(i => i.classList.toggle("light"))
    // console.log(input)

    input.forEach(i => i.classList.toggle("light"));
    textArea.classList.toggle("light");
    footer.classList.toggle("light");
    footerText.forEach(i =>i.classList.toggle("light"));
    logo.classList.toggle("light");
    header.classList.toggle("light");
    bar.forEach(i =>i.classList.toggle("light"));
    navMenu.classList.toggle("light")
    navLink.forEach(i => i.classList.toggle("light"));
    github.classList.toggle("light");
});

// Js Script to update Footer year 
let year = new Date();
currentYear.innerHTML = year.getFullYear();