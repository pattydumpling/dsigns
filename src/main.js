
import 'swiper/css';
import 'swiper/css/navigation'; // If you use navigation arrows
import 'swiper/css/pagination'; // If you use pagination dots
// ... your other JS if any ...
// At the top of main.js
import Swiper from 'swiper/bundle'; // Import Swiper bundle (includes all modules)

// Import Swiper's CSS (if not already done in your main style.css via @import)
import 'swiper/css/bundle'; // Bundle contains all core Swiper styles

// Your existing CSS import (if you kept it here)
import './style.css'; 
// In your main.js
import GLightbox from 'glightbox';
// Import GLightbox's CSS
import 'glightbox/dist/css/glightbox.min.css';

// Initialize GLightbox:
// It's good practice to ensure the DOM is fully loaded before initializing,
// though with Vite and module scripts, direct initialization often works too.
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = GLightbox({
    // --- Configuration Options (all are optional, these are examples) ---

    // selector: '.glightbox', // This is the default class GLightbox looks for.
                                // You only need to change this if you used a different class on your <a> tags.

    loop: true,                 // Allows gallery images to loop back to the start/end when navigating.

    touchNavigation: true,      // Enables swiping between images on touch devices.
    keyboardNavigation: true,   // Enables navigating with keyboard arrow keys.

    // openEffect: 'zoom',      // Animation effect when opening. Others: 'fade', 'none'.
    // closeEffect: 'zoom',     // Animation effect when closing.
    // slideEffect: 'slide',    // Animation effect when changing slides.

    // See GLightbox documentation for many more options:
    // e.g., width, height, draggable, captions, videos, etc.
    // For captions from your HTML (if you added data-title or similar to your <a> tags):
    // titlePosition: 'bottom', // 'top', 'bottom', 'left', 'right'
    // descPosition: 'bottom', // For descriptions if you use data-description
  });
});

// If you have other JS, like Swiper initialization, it would also be here:
// const swiper = new Swiper(...);
// Initialize Swiper
const swiper = new Swiper('.my-hero-swiper', {
    // Optional parameters
    loop: true, // Enable continuous loop mode
    grabCursor: true,

    // If you added pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // If you added navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Autoplay (optional)
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
});

// In main.js

// Make sure GLightbox code is inside this if you have it
document.addEventListener('DOMContentLoaded', () => {

    // --- Hamburger Menu Logic ---
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');

    if (hamburgerButton && navMenu) { // Check if elements exist before adding listener
        hamburgerButton.addEventListener('click', () => {
            // Toggle the 'is-active' class on both the hamburger and the menu
            hamburgerButton.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');

            // Update ARIA attribute for accessibility
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- GLightbox Initialization ---
    // Your GLightbox code would also be here
    // const lightbox = GLightbox({ ... });

});