const navbar = document.querySelector("#navbar");
const menuBurger = document.querySelector("#menuBurger");
const iconFa = document.querySelector(".fa-bars");

menuBurger.addEventListener("click", function(){
    navbar.classList.toggle("hidden");
    iconFa.classList.toggle("fa-x");
});