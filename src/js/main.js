const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const navMenu = document.querySelector('.nav-menu');

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

function showMenu(e) {
  e.preventDefault();
  return navMenu.classList.contains('nav-menu--active') ?
    navMenu.classList.remove('nav-menu--active') :
    navMenu.classList.add('nav-menu--active');
}

function hideMenu(e) {
  e.preventDefault();
  return navMenu.classList.remove('nav-menu--active');
}
