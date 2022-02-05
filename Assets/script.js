const bMenu = document.getElementById("burger-menu");
const bContent = document.querySelectorAll("#burger-content");
const fadeEl = document.querySelectorAll(".fade-in");

// CONTENT FADE IN
window.onload = setTimeout(window.onload = fadeIn, 250);
function fadeIn() {
    fadeEl.forEach((i) => {
        i.style.opacity = "1";
    });
}

// BURGER MENU CONTENT SLIDE ANIMATION
document.getElementById('burger-toggle').onclick = function() {
    if(this.checked){
        bMenu.style.height = "150px";
        bContent[0].style.opacity = "100%";
        bContent[1].style.opacity = "100%";
        bContent[2].style.opacity = "100%";
    } else {
        bMenu.style.height = "0px";
        bContent[0].style.opacity = "0%";
        bContent[1].style.opacity = "0%";
        bContent[2].style.opacity = "0%";
    }
};
