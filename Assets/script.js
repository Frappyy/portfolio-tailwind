const bMenu = document.getElementById('burger-menu');
const bContent = document.querySelectorAll("#burger-content");

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