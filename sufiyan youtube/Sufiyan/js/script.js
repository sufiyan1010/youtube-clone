var menuIcon = document.querySelector(".menu-icon");
var debasir = document.querySelector(".side-bar");
var container = document.querySelector(".container");
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-side-bar");
    container.classList.toggle("large-container");
}


