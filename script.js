document.addEventListener('DOMContentLoaded', () => {
    // A simple alert for "Add to Cart" buttons for demonstration
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // In a real site, this would trigger an AJAX call to add the item to the cart
            alert('Product added to cart! (Demo)');
        });
    });

    // Simple placeholder for mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
        // In a real implementation, you would toggle a class to show the menu
        alert('Mobile menu would open here!');
    });
});