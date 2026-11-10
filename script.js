
// =====================================
// LAKSHITH ANAND — PORTFOLIO
// Interactive JavaScript
// =====================================

// 1. Scroll reveal animation

const revealElements = document.querySelectorAll(
    '.about, .work, .contact, .project-card'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// 2. Update copyright year automatically

const footerText = document.querySelector('footer p');

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Lakshith Anand. All rights reserved.`;
}


// 3. Navbar scroll effect

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
