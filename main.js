const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar")
const logo = document.querySelector(".logo");

navMenu.addEventListener("click", () => {
    var status = navBar.getAttribute("data-visible");

    if(status == "false") {
        navBar.setAttribute("data-visible","true");
        navMenu.style.backgroundImage = "url('/images/icon-close.svg')"
        navMenu.style.position = "fixed"
        logo.style.position = "fixed"

    } else if (status == "true") {
        navBar.setAttribute("data-visible","false");
        navMenu.style.backgroundImage = "url('/images/icon-hamburger.svg')"
        navMenu.style.position = "absolute"
        logo.style.position = "relative"

    }
})