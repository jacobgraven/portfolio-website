document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Add the active class to the clicked navbar link
            link.classList.add('active');

            // Remove the active class from all other navbar links
            navLinks.forEach(navLink => {
                if (navLink !== link) {
                    navLink.classList.remove('active');
                }
            });

            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add event listener for scroll to update the active navbar link
    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        // Remove the active class from all navbar links
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add the active class to the corresponding navbar link based on the section in view
        navLinks.forEach(navLink => {
            const targetSectionId = navLink.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection.offsetTop <= currentScrollPos && targetSection.offsetTop + targetSection.offsetHeight > currentScrollPos) {
                navLink.classList.add('active');
            }
        });
    });
});