// alert('Hello!');
// Variables
const btnHamburger = document.querySelector('#btnHamburger');

// Functions

btnHamburger.addEventListener('click', function () {
  console.log(`I got clicked!`);
  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open');
    link.classList.remove('link-reveal');
    menu.classList.remove('menu-reveal');
  } else {
    menu.classList.add('menu-reveal');
    btnHamburger.classList.add('open');
    link.classList.add('link-reveal');
  }
});
