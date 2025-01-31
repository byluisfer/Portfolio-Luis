document.addEventListener("DOMContentLoaded", () => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }
  
    let scrollY = window.scrollY;
    let isScrolling = false;
    
    function smoothScroll(event) {
      event.preventDefault();
      let delta = event.deltaY * 0.6;
      updateScroll(delta);
    }
  
    function updateScroll(delta) {
      scrollY += delta;
      scrollY = Math.max(0, Math.min(
        scrollY,
        document.documentElement.scrollHeight - window.innerHeight
      ));
  
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
});