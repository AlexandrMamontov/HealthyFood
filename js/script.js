let burger = document.querySelector('.header__burger');
let burgerImg = document.querySelector('.header__open');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__item')

burger.addEventListener('click',

  function () {
    burger.classList.toggle('header__burger--active');

    burgerImg.classList.toggle('header__open--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    burgerImg.classList.remove('header__open--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');

  })
})
