document.addEventListener("DOMContentLoaded", () => {
  let scrollY = window.scrollY;
  let isScrolling = false;

  function smoothScroll(event) {
      event.preventDefault(); // Stop the scroll by default
      let delta = event.deltaY * 0.6;
      scrollY += delta;

      // Asegure that scrollY does not exceed the upper or lower limit
      scrollY = Math.max(0, Math.min(scrollY, document.documentElement.scrollHeight - window.innerHeight));

      if (!isScrolling) {
          isScrolling = true;
          requestAnimationFrame(animateScroll);
      }
  }

  function animateScroll() {
      let currentScroll = window.scrollY;
      let diff = scrollY - currentScroll;

      if (Math.abs(diff) > 0.5) {
          window.scrollBy(0, diff * 0.2);
          requestAnimationFrame(animateScroll);
      } else {
          isScrolling = false;
          scrollY = window.scrollY;
      }
  }

  document.addEventListener("wheel", smoothScroll, { passive: false });
  document.addEventListener("touchmove", smoothScroll, { passive: false });
});