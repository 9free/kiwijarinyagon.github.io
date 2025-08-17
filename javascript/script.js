// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Alert on contact form submit (replace with real logic later)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');  // Test interactivity
});