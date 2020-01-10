const logoEl = document.querySelector(".mobile-nav-bar__icon-box");
const mainNavEl = document.querySelector(".nav");
const hamburger = document.querySelector(".mobile-nav-bar__hamburger-menu");

logoEl.addEventListener("click", function (evt) {
    evt.preventDefault();

    const $target = evt.target;

    mainNavEl.classList.toggle("showNav");

    hamburger.toggle("background-color", )
//    Да видя как се toggle-va и как се селектира pseudo element с JS
    

});