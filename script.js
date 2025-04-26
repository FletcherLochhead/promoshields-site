<script src="script.js"></script>

// Scroll Reveal Animation
ScrollReveal().reveal('.section-title', { delay: 300, distance: '50px', duration: 1500 });
ScrollReveal().reveal('.cta-button', { delay: 500, distance: '100px', duration: 1500 });

// GSAP Animation for Smooth Header Appearance
gsap.from('.hero h1', {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 0.5,
    ease: 'power4.out'
});

gsap.from('.hero p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
    ease: 'power4.out'
});
