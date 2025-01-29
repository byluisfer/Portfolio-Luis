document.addEventListener("DOMContentLoaded", () => {
  let scrollY = window.scrollY;
  let isScrolling = false;
  let touchStartY = 0;

  function smoothScroll(event) {
      event.preventDefault(); // Stop the default scroll
      let delta = event.deltaY * 0.6;
      updateScroll(delta);
  }

  function touchStart(event) {
      touchStartY = event.touches[0].clientY;
  }

  function touchMove(event) {
      event.preventDefault();
      let touchY = event.touches[0].clientY;
      let delta = (touchStartY - touchY) * 0.6;
      updateScroll(delta);
      touchStartY = touchY;
  }

  function updateScroll(delta) {
      scrollY += delta;

      // Make sure that scrollY does not exceed the upper or lower limit
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
  document.addEventListener("touchstart", touchStart, { passive: false });
  document.addEventListener("touchmove", touchMove, { passive: false });
});