// ================================
// PORTFOLIO JAVASCRIPT
// Nessrine Felah
// ================================


// ================================
// 1. YEAR AUTOMATICALLY
// ================================

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.innerHTML = `© ${new Date().getFullYear()} Nessrine Felah`;
}


// ================================
// 2. NAVBAR EFFECT ON SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(11, 11, 22, 0.97)";
        header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
    } else {
        header.style.background = "rgba(11, 11, 22, 0.9)";
        header.style.boxShadow = "none";
    }

});


// ================================
// 3. SMOOTH REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// ================================
// 4. TYPING EFFECT
// ================================

const subtitle = document.querySelector("#home h2");

if (subtitle) {

    const text = subtitle.textContent.trim();

    subtitle.textContent = "";

    let index = 0;

    function typeEffect() {

        if (index < text.length) {

            subtitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeEffect, 60);

        }

    }

    typeEffect();
}


// ================================
// 5. ACTIVE NAVIGATION LINK
// ================================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});
