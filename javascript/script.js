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

function initSlider(containerSelector) {
    const container = document.querySelector(containerSelector);
    const slider = container.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) currentSlide = 0;
        if (index < 0) currentSlide = totalSlides - 1;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    container.querySelector('.left-arrow').addEventListener('click', function() {
        currentSlide--;
        showSlide(currentSlide);
    });

    container.querySelector('.right-arrow').addEventListener('click', function() {
        currentSlide++;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

// Initialize both sliders separately
initSlider('.academic-section-1 > .slider-container');
initSlider('.academic-section-2 > .slider-container');
