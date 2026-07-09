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

    sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < top + height
        ) {
            current = section.id;
        }
    });

    // If we're at the bottom of the page, force the last section active
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
