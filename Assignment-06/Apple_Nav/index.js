const navbar = document.getElementById('navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');

const openMobileNavbar = () => {
  navbar.classList.add('opened');
  navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
};

const closeMobileNavbar = () => {
  navbar.classList.remove('opened');
  navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
};

navbarToggle.addEventListener('click', () => {
  if (navbar.classList.contains('opened')) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector('.navbar-list');
const navbarLinksContainer = navbar.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener('click', closeMobileNavbar);
