let navToggle = document.getElementById("nav-toggle");
let navMenu = document.getElementById("nav-menu");
let navClose = document.getElementById("nav-close");
let header = document.getElementById("header");
navToggle.addEventListener("click",()=>{
    navMenu.classList.add("show__menu");
})
navClose.addEventListener("click",()=>{
    navMenu.classList.remove("show__menu");
})
function scrollMenu(){
    if(this.scrollY>=10){
        header.classList.add("scroll__menu");
    }
    else{
        header.classList.remove("scroll__menu");

    }
}
window.addEventListener("scroll",scrollMenu)