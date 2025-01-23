document.addEventListener("DOMContentLoaded", () => {
    const cursorDot = document.querySelector(".cursor-point");
    const projectCards = document.querySelectorAll(".proyectoCard");

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    const delay = 0.1;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        dotX += (mouseX - dotX) * delay;
        dotY += (mouseY - dotY) * delay;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Change the hover cursor
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            cursorDot.style.width = "60px";
            cursorDot.style.height = "60px";
            cursorDot.style.background = "url('/assets/OpenCursor.png') center/contain no-repeat";
        });

        card.addEventListener("mouseleave", () => {
            cursorDot.style.width = "14px";
            cursorDot.style.height = "14px";
            cursorDot.style.background = "white";
        });
    });
});