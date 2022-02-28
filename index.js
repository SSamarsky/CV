const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const navLinks = document.querySelectorAll('.nav__link');

function toggleMenu() {
    burger.classList.toggle('open');
    headerContainer.classList.toggle('open');
    nav.classList.toggle('open');
    main.classList.toggle('open');
    header.classList.toggle('open');
}

function closeMenu(event) {
    if (event.target.classList.contains('nav__link')) {
        burger.classList.remove('open');
        headerContainer.classList.remove('open');
        nav.classList.remove('open');
        main.classList.remove('open');
        header.classList.remove('open'); 
    }
}

burger.addEventListener('click',toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));