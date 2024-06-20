const menu = document.querySelector('.hamburger'),
    close = document.querySelector('.close'),
    mobileMenu = document.querySelector('.mobile-menu');
    shadow = document.querySelector('.shadow');
menu.addEventListener('click', () => {
    menu.style.display = "none";
    close.style.display = "block";
    mobileMenu.style.display = "block";
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
    shadow.style.display = "block";
})
close.addEventListener('click', () => {
    menu.style.display = "block";
    close.style.display = "none";
    mobileMenu.style.display = "none";
    shadow.style.display = "none";
})