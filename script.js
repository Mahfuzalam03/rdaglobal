// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(11, 12, 16, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(11, 12, 16, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});
