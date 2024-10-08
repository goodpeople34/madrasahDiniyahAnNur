    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-list");
    let navList = document.getElementById("navList");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navList.classList.remove("line");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
