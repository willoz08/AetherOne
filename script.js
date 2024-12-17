// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Newsletter Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput.value.includes('@')) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
