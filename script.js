// Simple JavaScript for form submission (optional)
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset(); // Clear the form after submission
});
