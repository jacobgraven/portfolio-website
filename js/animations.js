// Scroll to top on reload/refresh
window.onbeforeunload = function () {
    document.getElementById('landing-img').remove();
    document.getElementById('landing-header').remove();
    document.getElementById('landing-text').remove();

    // TODO: remove landing elements, add landing elements (opaque)
    window.scrollTo(0, 0);
}


// Navbar smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const href = link.getAttribute('href');
            const targetSection = document.querySelector(href);

            window.scrollTo({
                top: targetSection.offsetTop - 5 * window.innerHeight / 100, // 5vh above section
                behavior: 'smooth'
            });
        });
    });
});