// JavaScript for smooth scroll and additional functionality

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding class to About Us section paragraph on page load
document.addEventListener('DOMContentLoaded', function() {
    const aboutParagraph = document.querySelector('.about-us-section p');
    if (aboutParagraph) {
        aboutParagraph.classList.add('visible');
    }
});

// Function to handle "Add to Cart"
function addToCart(item, price) {
    document.getElementById('payment-form').style.display = 'block';
    document.getElementById('item').value = item;
    document.getElementById('price').value = price;
    document.getElementById('cash').focus();
}
