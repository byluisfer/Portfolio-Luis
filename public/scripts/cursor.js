document.addEventListener("DOMContentLoaded", () => {
    const cursorDot = document.querySelector(".cursor-point");

    let mouseX = 0, mouseY = 0; // Position of the mouse
    let dotX = 0, dotY = 0; // Position of the point
    const delay = 0.1; // Speed of the point

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth interpolation: move `dotX` and `dotY` closer to `mouseX` and `mouseY`
        dotX += (mouseX - dotX) * delay;
        dotY += (mouseY - dotY) * delay;

        // Add the new coordinates to the point
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateCursor); // Call the function on each frame
    }

    animateCursor(); // Start the animation
});