document.addEventListener("DOMContentLoaded", () => {
    let scrollY = window.scrollY;
    let isScrolling = false;
    let touchStartY = 0;
    let touchDeltaY = 0;
    let lastTouchTime = 0;
  
    function smoothScroll(event) {
        event.preventDefault();
        let delta = event.deltaY * 0.6;
        updateScroll(delta);
    }
  
    function touchStart(event) {
        touchStartY = event.touches[0].clientY;
        touchDeltaY = 0;
        lastTouchTime = Date.now();
    }
  
    function touchMove(event) {
        let touchY = event.touches[0].clientY;
        touchDeltaY = touchStartY - touchY;
        updateScroll(touchDeltaY * 1.4);
        touchStartY = touchY;
    }
  
    function touchEnd() {
        let timeDiff = Date.now() - lastTouchTime;
        if (Math.abs(touchDeltaY) > 10 && timeDiff < 200) {
            applyMomentum(touchDeltaY);
        }
    }
  
    function applyMomentum(delta) {
        let velocity = delta * 0.6;
        function momentumScroll() {
            if (Math.abs(velocity) > 0.5) {
                updateScroll(velocity);
                velocity *= 0.95;
                requestAnimationFrame(momentumScroll);
            }
        }
        momentumScroll();
    }
  
    function updateScroll(delta) {
        scrollY += delta;
  
        // Avoid scrolling past the limits of the document
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
    document.addEventListener("touchstart", touchStart, { passive: true });
    document.addEventListener("touchmove", touchMove, { passive: false }); 
    document.addEventListener("touchend", touchEnd);
});