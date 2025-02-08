// افکت پارالاکس برای هدر
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector("header").style.backgroundPositionY = scrollPosition * 0.5 + "px";
});