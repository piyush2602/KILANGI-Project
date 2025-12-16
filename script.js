// Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menuOverlay = document.createElement('div');
menuOverlay.className = 'mobile-menu-overlay';

menuOverlay.innerHTML = `
    <div class="mobile-menu-container">
        <button class="close-btn">&times;</button>
        <nav class="mobile-nav">
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </div>
`;

document.body.appendChild(menuOverlay);

const closeBtn = menuOverlay.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Filter Pills Logic (Basic)
const pills = document.querySelectorAll('.pill');
pills.forEach(pill => {
    pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animates only once
        }
    });
}, observerOptions);

// Target sections to animate
document.querySelectorAll('.section-heading, .product-card, .gift-card, .feature-item').forEach(el => {
    el.classList.add('fade-in-section');
    observer.observe(el);
});

// Function to change product image on color dot click
function changeProductImage(button, newSrc) {
    // Find the closest product card
    const card = button.closest('.product-card');
    
    // Find the image element within that card
    const img = card.querySelector('.product-image img');
    
    // Update the src
    if (img && newSrc) {
        // Optional: Add a fade effect
        img.style.opacity = '0.5';
        setTimeout(() => {
            img.src = newSrc;
            img.style.opacity = '1';
        }, 150);
    }
    
    // Toggle active state for dots in this card
    const allDots = card.querySelectorAll('.color-dot');
    allDots.forEach(dot => dot.classList.remove('active'));
    button.classList.add('active');
}
