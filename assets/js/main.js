function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Ensure the elements exist on the page before adding listeners
    if (mobileMenuButton && mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        // Close mobile menu when a link is clicked (for smooth scrolling)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Initialize everything after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to body for fade-in effect
    document.body.classList.add('loaded');
    
    // Setup the mobile menu
    setupMobileMenu();
    
    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 800, // Animation duration in milliseconds
        offset: 100,   // Offset (in px) from the original trigger point
        once: true,    // Whether animation should happen only once
    });
});