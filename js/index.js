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
const loader = document.querySelector('.loader'),
    hider = document.querySelector('.hider');
setTimeout(() => {
    loader.style.display = "none";
hider.style.display = "none";
}, 7000);
let sections = document.querySelectorAll('section')
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;    
        let offset = sec.offsetTop - 150;    
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('me');
        } else {
            sec.classList.remove('me');
        }
    });
}
