//Variables
const openMenu = document.querySelector('#open-menu');
const navMenu = document.querySelector('.nav-menu');
const burger = document.querySelector('.burger');
const navMenuLink = document.querySelectorAll('.nav-menu__link');
const wrap = document.querySelector('.wrapper');
const bodyEl = document.querySelector('body');



openMenu.addEventListener('click', showMenu);
smoothMenu();

//Menu
function showMenu (e) {
  e.preventDefault();
  navMenu.classList.toggle('nav-menu--active');
  burger.classList.toggle('burger--active');
  wrap.classList.toggle('wrapper--active');
  bodyEl.classList.toggle('body--fixed');
}

//SmoothLinksMenu
function smoothMenu(){
  navMenuLink.forEach(link => {
    link.addEventListener('click', function (){
      if(navMenu.classList.contains('nav-menu--active')){
        navMenu.classList.remove('nav-menu--active');
        burger.classList.remove('burger--active');
      }
    })
  })
}
