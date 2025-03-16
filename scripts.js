// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animations (on load)
gsap.from('#hero h1', {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'back'
});

gsap.from('#hero p', {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5
});
gsap.from('#hero .logo', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)',
    y: -20,
    rotation: 360 // Full rotation for a playful entrance
});

// Continuous floating animation
gsap.to('#hero .logo', {
    y: 10,
    yoyo: true,
    repeat: -1,
    duration: 2,
    ease: 'power1.inOut'
});
// Section Animations (on scroll)
gsap.utils.toArray('section:not(#hero)').forEach(section => {
    gsap.from(section.querySelector('h2'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        x: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from(section.querySelector('p, .grid, ul'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });
});

// Power-Ups Grid Staggered Animation
gsap.from('.item', {
    scrollTrigger: {
        trigger: '#our-power-ups',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
});

// Active Menu Highlight
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
    gsap.to(carousel, {
        x: -currentIndex * (items[0].offsetWidth + 20), // Adjust for margin
        duration: 0.5,
        ease: 'power2.out'
    });
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Scroll animation for the section
gsap.from('#team-members h2', {
    scrollTrigger: {
        trigger: '#team-members',
        start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from('.carousel', {
    scrollTrigger: {
        trigger: '#team-members',
        start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5
});