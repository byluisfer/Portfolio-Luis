document.addEventListener("DOMContentLoaded", () => {
    let scrollY = window.scrollY;
    let isScrolling = false;
  
    function smoothScroll(event) {
      event.preventDefault();// Stop the default scroll
      let delta = event.deltaY * 0.6; // Control the speed of the scroll
      scrollY += delta;
  
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(animateScroll);
      }
    }
  
    function animateScroll() {
      let currentScroll = window.scrollY;
      let diff = scrollY - currentScroll;
      
      window.scrollBy(0, diff * 0.2); // Control the smoothness of the scroll
  
      if (Math.abs(diff) > 0.5) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling = false;
      }
    }
  
    document.addEventListener("wheel", smoothScroll, { passive: false }); // Scroll with mouse wheel
    document.addEventListener("touchmove", smoothScroll, { passive: false }); // Scroll with touchpad
  });