const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('a[href^="#"]');

window.addEventListener("scroll", () => {
    let current = "";

    const headerOffset = 120;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            current = section.id;
        }
    });

    // Keep the last section active at the bottom of the page
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        current = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
});

const hamburger = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeButton = document.getElementById("close-menu");

function closeMenu() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
}

function toggleMenu() {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);

if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
}

// Close when any menu link is clicked
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
    const expandAllButton = document.querySelector(".expand-all");

    // Individual accordion
    accordions.forEach((accordion) => {
        const intro = accordion.querySelector(".accordion-intro");

        intro.addEventListener("click", () => {
            accordion.classList.toggle("active");

            updateExpandAllButton();
        });
    });

    // Expand All
    expandAllButton.addEventListener("click", () => {
        const shouldExpand = [...accordions].some(
            (accordion) => !accordion.classList.contains("active")
        );

        accordions.forEach((accordion) => {
            accordion.classList.toggle("active", shouldExpand);
        });

        updateExpandAllButton();
    });

    function updateExpandAllButton() {
        const allExpanded = [...accordions].every(
            (accordion) => accordion.classList.contains("active")
        );

        expandAllButton.classList.toggle("active", allExpanded);

        const text = expandAllButton.querySelector("p");
        text.textContent = allExpanded ? "Collapse All" : "Expand All";
    }
});
