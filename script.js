/**
 * showPage Function
 * @param {string} pageId - The ID of the section to display (home, collection, etc.)
 */
function showPage(pageId) {
    // 1. Select all page sections and hide them
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Find the clicked section and show it
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 3. Update Navigation Link Styles
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the currently selected link
    const currentLink = document.getElementById('link-' + pageId);
    if (currentLink) {
        currentLink.classList.add('active');
    }

    // 4. Smooth scroll back to the top of the new "page"
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Log for debugging
    console.log(`Mapsd to: ${pageId}`);
}

// Optional: Form Submission Handler for the Contact Page
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        alert('Thank you! Your inquiry has been sent to Aura Luxury Concierge.');
        e.target.reset();
    }
});