const bMenu = document.getElementById("burger-menu");
const bContent = document.querySelectorAll("#burger-content");
const fadeEl = document.querySelectorAll(".fade-in");
const bgImage = document.getElementById('image');

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

// CONTENT FADE IN
window.onload = setTimeout(window.onload = fadeIn, 250);
function fadeIn() {
    fadeEl.forEach((i) => {
        i.style.opacity = "1";
    });
}

// MAKES THE BACKGROUND IMAGE MOVE BY MOUSE MOVEMENTS
window.addEventListener('mousemove', (e) => {
    let x = e.clientX - window.innerWidth;
    let y = e.clientY - window.innerHeight;

    bgImage.style.transform = 'translate(' + (x / 80) + 'px, ' + (y / 80) + 'px';
});
