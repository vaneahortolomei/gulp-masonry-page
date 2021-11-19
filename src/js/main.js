//Variables
window.addEventListener('load', function () {
  const openMenuBtn = document.querySelector('#open-menu');
  const closeMenuBtn = document.querySelector('#close-menu');
  const navMenu = document.querySelector('.nav-menu');
  const burger = document.querySelector('.burger');
  const navMenuLink = document.querySelectorAll('.nav-menu__link');
  const wrap = document.querySelector('.wrapper');
  const bodyEl = document.querySelector('body');
  const contactForm = document.querySelector('.footer__form');


  openMenuBtn.addEventListener('click', showMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  smoothMenu();

//Menu
  function showMenu(e) {
    e.preventDefault();
    navMenu.classList.add('nav-menu--active');
    burger.classList.add('burger--active');
    wrap.classList.add('wrapper--active');
    bodyEl.classList.add('body--fixed');
  }

//close menu
  function closeMenu() {
    burger.classList.remove('burger--active');
    navMenu.classList.remove('nav-menu--active');
    wrap.classList.remove('wrapper--active');
    bodyEl.classList.remove('body--fixed');
  }


//SmoothLinksMenu
  function smoothMenu() {
    navMenuLink.forEach(link => {
      link.addEventListener('click', function () {
        if (navMenu.classList.contains('nav-menu--active')) {
          burger.classList.remove('burger--active');
          wrap.classList.remove('wrapper--active');
          navMenu.classList.remove('nav-menu--active');
          bodyEl.classList.remove('body--fixed');
        }
      })
    })
  }

//window bottom
  window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scroll) {
      setTimeout(() => {
        contactForm.classList.add('footer__form--show');
      }, 1000);
    }
  });


//validation form
  const form = document.querySelector('.form');
  const formName = document.querySelector('#name');
  const formEmail = document.querySelector('#email');
  const formMessage = document.querySelector('#message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
  });

  function validateForm() {
    const userName = formName.value.trim();
    const userEmail = formEmail.value.trim();
    const userMessage = formMessage.value.trim();

    userName === '' ? setErrorMessage(formName, 'User name cannot be blank') :
      setSuccessMessage(formName);
    userEmail === '' ? setErrorMessage(formEmail, 'Email name cannot be blank') :
      setSuccessMessage(formEmail);
    userMessage === '' ? setErrorMessage(formMessage, 'Message cannot be blank') :
      setSuccessMessage(formMessage);
  }

  function setErrorMessage(input, text) {
    const formControl = input.parentElement;
    const formErrorText = formControl.querySelector('.form__error');
    const formError = formControl.querySelector('.form-field');
    formError.classList.remove('success');
    formErrorText.innerText = text;
  }

  function setSuccessMessage(input) {
    const formControl = input.parentElement;
    const formError = formControl.querySelector('.form-field');
    const formErrorText = formControl.querySelector('.form__error');
    formError.classList.add('success');
    formErrorText.innerText = '';
  }
});
