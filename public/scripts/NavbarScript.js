document.addEventListener("DOMContentLoaded", function () {
    const indicator = document.getElementById("active-indicator");
    const links = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    function updateIndicator(link) {
        if (!indicator) return;

        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;
        const linkLeft = link.offsetLeft;

        const newHeight = linkHeight * 1.2;
        const verticalOffset = (linkHeight - newHeight) / 2 - 2;

        indicator.style.width = `${linkWidth}px`;
        indicator.style.height = `${newHeight}px`;
        indicator.style.transform = `translate(${linkLeft}px, ${verticalOffset + 9}px)`;
    }

    // Show/hide mobile menu
    function toggleMenu() {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            mobileMenu.classList.add("translate-x-0", "opacity-100");
        } else {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("translate-x-0", "opacity-100");
        }
    }

    menuToggle.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);

    document.querySelectorAll("#mobile-menu a").forEach(link => {
        link.addEventListener("click", toggleMenu);
    });

    // Start indicator on first link
    const firstLink = document.querySelector(".nav-link");
    if (firstLink) updateIndicator(firstLink);

    // Add event listeners to all links
    links.forEach(link => {
        link.addEventListener("click", function () {
            updateIndicator(link);
        });
    });
});