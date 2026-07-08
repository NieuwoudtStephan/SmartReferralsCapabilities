const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".header-right a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
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
            accordion => !accordion.classList.contains("active")
        );

        accordions.forEach((accordion) => {
            accordion.classList.toggle("active", shouldExpand);
        });

        updateExpandAllButton();
    });

    function updateExpandAllButton() {
        const allExpanded = [...accordions].every(
            accordion => accordion.classList.contains("active")
        );

        expandAllButton.classList.toggle("active", allExpanded);

        const text = expandAllButton.querySelector("p");
        text.textContent = allExpanded ? "Collapse All" : "Expand All";
    }
});
