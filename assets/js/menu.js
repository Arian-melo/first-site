(function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  if (!menuToggle || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('active');
    menuToggle.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 769) {
      closeMenu();
    }
  });
})();
