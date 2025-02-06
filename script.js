// Initialize cart count
let cartCount = 0;

// Function to add items to the cart and animate the button
function addToCart(plan) {
    cartCount++; // Increment cart count
    document.querySelector('.cart-count').textContent = cartCount; // Update cart icon

    // Animate the "Add To Cart" button
    const button = event.target;
    button.classList.add('added');
    setTimeout(() => {
        button.classList.remove('added');
    }, 500);

    // Show confirmation message
    alert(plan + " plan added to cart!");
}

// View cart modal functionality
function viewCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'flex';
    // Display cart items dynamically
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = `<li>Basic Plan</li><li>Advance Plan</li><li>Premium Plan</li>`; // Add items dynamically based on your cart

    // Smooth scroll to the top of the page
    smoothScrollToTop();
}

// Close the cart modal
function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

// Smooth scroll to the top
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Tooltips visibility control
document.querySelectorAll('.price-col').forEach(col => {
    col.addEventListener('mouseenter', () => {
        const tooltip = col.querySelector('.info-tooltip');
        tooltip.style.display = 'block';
    });
    col.addEventListener('mouseleave', () => {
        const tooltip = col.querySelector('.info-tooltip');
        tooltip.style.display = 'none';
    });
});
