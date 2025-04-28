function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > window.innerHeight - 100) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.pageYOffset;
    
    // Adjust the background position for parallax effect
    hero.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
});