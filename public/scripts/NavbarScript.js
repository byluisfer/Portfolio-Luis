document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('nav');
  
    if (navBar) {  //  Check for navBar
      const links = document.querySelectorAll('nav a');
      const indicator = document.getElementById('active-indicator');
      const ledBar = document.getElementById('led-bar');
      const sections = document.querySelectorAll('main > section');
      const navHeight = navBar.offsetHeight; //  Get the height of the nav
      let isScrolling = false;
  
      // Function to move the indicator and LED bar
      const moveIndicator = (element) => {
        const linkRect = element.getBoundingClientRect();
  
        //  Adjust the size and position of the indicator
        indicator.style.width = `${linkRect.width}px`;
        indicator.style.left = `${element.offsetLeft}px`;
        indicator.style.height = `calc(75%)`; //  Reduce the height of the indicator
        indicator.style.borderRadius = '20px'; //  Reduce the rounded corners of the borders
  
        //  Move the LED bar
        ledBar.style.width = `${linkRect.width / 2}px`; // LED smaller than the indicator
        ledBar.style.left = `${element.offsetLeft + linkRect.width / 4}px`; //  Centered on the indicator
      };
  
      // Function for smooth scrolling
      function smoothScroll(target) {
        const targetPosition = target.offsetTop - navHeight; //  Adjust the scrolling based on the height of the navbar
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
  
      //  Add event listener to each link in the menu
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
  
          //  Move the indicator
          moveIndicator(link);
  
          //  Get the corresponding section based on the ID of the link
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
  
          isScrolling = true;
  
          smoothScroll(targetSection);
  
          //  Reset the scrolling once it's finished
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        });
      });
  
      //  Adjust the indicator with the page scroll
      window.addEventListener('scroll', () => {
        if (isScrolling) return;
  
        let scrollPos = window.scrollY + window.innerHeight / 2;
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');
  
          // Verify if the current scroll is within the section
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (activeLink) {
              moveIndicator(activeLink);
            }
          }
        });
      });
  
      const activeLink = document.querySelector('nav a');
      if (activeLink) {
        moveIndicator(activeLink);
      }
  
    } else {
      console.error("No se pudo encontrar el elemento 'nav' en el DOM.");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    // Open the menu when click the hamburger button (in mobile)
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });

    // Close the menu when click the hamburger button (in mobile)
    menuClose.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });

    // Close the menu when click in a section to navigate (in mobile)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
      });
    });
});
  