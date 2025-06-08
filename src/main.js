// ===================================
//  IMPORTS
//  All imports should be at the top of the file for clarity.
// ===================================

// Import SwiperJS for the carousel
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // This single bundle includes all core Swiper styles

// Import GLightbox for the image gallery
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

// Import your main custom stylesheet
import './style.css'; // Or '/src/style.css' if that's your path


// ===================================
//  INITIALIZATION
//  Run all scripts after the HTML document is fully loaded and ready.
// ===================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Swiper Carousel Initialization ---
    // This finds your carousel container and makes it work.
    // It's safe to run here because we know the DOM is ready.
    const swiper = new Swiper('.my-hero-swiper', {
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: { // Autoplay is commented out, but can be enabled if you like
        //     delay: 4000,
        //     disableOnInteraction: false,
        // }
    });


    // --- 2. GLightbox Initialization ---
    // This finds all links with the 'glightbox' class and activates them.
    if (typeof GLightbox === 'function') { // Check if GLightbox was imported correctly
        const lightbox = GLightbox({
            loop: true,
            touchNavigation: true
        });
    }


    // --- 3. Hamburger Menu Logic ---
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (hamburgerButton && navMenu) { // Only run this code if the menu elements exist on the page

        // Logic to open/close the menu when the hamburger button is clicked
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('is-active');
            navMenu.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll');
            
            // Toggle ARIA attribute for accessibility
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Logic to close the menu when any of the navigation links are clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Only run the 'close' function if the menu is currently active
                if (navMenu.classList.contains('is-active')) {
                    hamburgerButton.classList.remove('is-active');
                    navMenu.classList.remove('is-active');
                    document.body.classList.remove('no-scroll');
                    hamburgerButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
const contactForm = document.querySelector('#contact-form');
const successMessage = document.querySelector('#form-success-message');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        // 1. Prevent the browser's default form submission behavior
        event.preventDefault();

        // 2. Get the form data
        const formData = new FormData(contactForm);
        
        // 3. Send the data to Netlify using the Fetch API
        fetch("/", { // Netlify recommends submitting to the page's own path for AJAX
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // 4. If the submission is successful:
            console.log('Form successfully submitted to Netlify');
            contactForm.style.display = 'none'; // Hide the form
            successMessage.classList.remove('hidden'); // Show the success message
        })
        .catch(error => {
            // 5. If there's an error:
            alert("Sorry, there was an error sending your message. Please try again later.");
            console.error(error);
        });
    });
}
}); // <-- End of the single DOMContentLoaded event listener