window.onscroll = function () {
    const header = document.querySelector('#headerNav');
    const navtop = header.offsetTop;

    if (window.pageYOffset >navtop) {
        header.classList.add("nav-Fixed");
    }else{
        header.classList.remove("nav-Fixed");
    }
}


const navbar = document.querySelector("#navbar");
const menuBurger = document.querySelector("#menuBurger");
const iconFa = document.querySelector(".fa-bars");

menuBurger.addEventListener("click", function(){
    navbar.classList.toggle("hidden");
    iconFa.classList.toggle("fa-x");
});