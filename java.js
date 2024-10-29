// Function to simulate adding to cart
function addToCart(item) {
    alert(item + ' added to cart!');
}

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent! We will get back to you soon.");
});
