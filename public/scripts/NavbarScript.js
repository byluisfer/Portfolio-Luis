document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.querySelector('nav');
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');
  const indicator = document.getElementById('active-indicator');
  const ledBar = document.getElementById('led-bar');
  const navHeight = navBar ? navBar.offsetHeight : 0;
  const extraOffset = 45; // Espaciado extra para que el título no quede tapado
  let isScrolling = false;

  /**
   * Mueve el indicador activo en la navbar con animación fluida
   */
  const moveIndicator = (element) => {
      if (!element) return;

      const linkRect = element.getBoundingClientRect();

      indicator.style.transition = 'all 0.3s ease-in-out';
      indicator.style.width = `${linkRect.width}px`;
      indicator.style.left = `${element.offsetLeft}px`;
      indicator.style.height = '75%';
      indicator.style.borderRadius = '20px';

      ledBar.style.transition = 'all 0.3s ease-in-out';
      ledBar.style.width = `${linkRect.width / 2}px`;
      ledBar.style.left = `${element.offsetLeft + linkRect.width / 4}px`;
  };

  /**
   * Desplazamiento suave con compensación para el navbar
   */
  const smoothScroll = (target) => {
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

      isScrolling = true;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });

      setTimeout(() => {
          isScrolling = false;
      }, 500);
  };

  /**
   * Detecta la sección activa en tiempo real mientras se hace scroll
   */
  const updateNavbarOnScroll = () => {
      if (isScrolling) return;

      let scrollPos = window.scrollY + navHeight + extraOffset;

      for (let section of sections) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
              if (activeLink) {
                  moveIndicator(activeLink);
              }
              break;
          }
      }
  };

  /**
   * Evento de clic en los enlaces del navbar
   */
  links.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              smoothScroll(targetSection);
              moveIndicator(link);
          }
      });
  });

  /**
   * Evento de scroll ultra rápido y fluido con `requestAnimationFrame()`
   */
  window.addEventListener('scroll', () => {
      requestAnimationFrame(updateNavbarOnScroll);
  });

  /**
   * Corrección inicial del indicador al cargar la página
   */
  setTimeout(() => {
      const activeLink = document.querySelector('nav a');
      if (activeLink) {
          moveIndicator(activeLink);
      }
  }, 300);
});

/**
* Script para el menú en móvil
*/
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && menuClose && mobileMenu) {
      menuToggle.addEventListener('click', () => {
          mobileMenu.classList.remove('-translate-x-full');
      });

      menuClose.addEventListener('click', () => {
          mobileMenu.classList.add('-translate-x-full');
      });

      document.querySelectorAll('#mobile-menu a').forEach(link => {
          link.addEventListener('click', () => {
              mobileMenu.classList.add('-translate-x-full');
          });
      });
  }
});
